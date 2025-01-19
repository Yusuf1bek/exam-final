import { useParams } from 'react-router-dom';
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Rating } from '@mui/material';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/slice/cartSlice';
import Loading from '@/components/Loading/Loading';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

interface Product {
  id: string;
  title: string;
  price: number;
  desc: string;
  star: number;
  urls: string[];
}

interface Comment {
  id: string;
  author: string;
  star: number;
  text: string;
  createdAt: string;
}

const fetchProductById = async (id: string): Promise<Product> => {
  const response = await axios.get(`https://6787c574c4a42c9161082cce.mockapi.io/products/${id}`);
  return response.data;
};

const fetchComments = async (id: string): Promise<Comment[]> => {
  const response = await axios.get(`https://6787c574c4a42c9161082cce.mockapi.io/products/${id}/comments`);
  return response.data;
};

const postComment = async ({ id, comment }: { id: string; comment: Omit<Comment, 'id'> }): Promise<Comment> => {
  const response = await axios.post(`https://6787c574c4a42c9161082cce.mockapi.io/products/${id}/comments`, comment);
  return response.data;
};

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductById(id!),
    enabled: !!id,
  });

  const { data: comments } = useQuery({
    queryKey: ['comments', id],
    queryFn: () => fetchComments(id!),
    enabled: !!id,
  });

  const mutation = useMutation({
    mutationFn: postComment,
    onSuccess: () => {
      toast.success('Comment added successfully');
      queryClient.invalidateQueries({ queryKey: ['comments', id!] });
    },
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [commentData, setCommentData] = useState({ author: '', text: '', star: 0 });
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;

    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      desc: product.desc,
      quantity,
      image: product.urls[0],
    };
    dispatch(addToCart(cartItem));
    toast.success('Product added to cart successfully');
  };

  const handleAddComment = () => {
    if (!id) return;
    mutation.mutate({ id, comment: { ...commentData, createdAt: new Date().toISOString() } });
    setCommentData({ author: '', text: '', star: 0 });
    setIsModalOpen(false);
  };

  if (isLoading) {
    return <div><Loading /></div>;
  }

  return (
    <section className="container mx-auto p-4 mt-[30px]">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="w-full md:w-[400px] h-[400px] mb-4">
            <img
              src={selectedImage || product?.urls[0]}
              alt={product?.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex gap-4">
            {product?.urls.map((url: string, index: number) => (
              <img
                key={index}
                src={url}
                alt={`Thumbnail ${index + 1}`}
                className="w-[60px] h-[60px] object-cover rounded-md cursor-pointer"
                onClick={() => setSelectedImage(url)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[24px] md:text-[36px] font-bold">{product?.title}</h1>
          <Rating value={product?.star} readOnly precision={0.5} />
          <p className="text-[20px] md:text-[24px] font-bold">{product?.price} сум</p>
          <p className="text-gray-600">{product?.desc}</p>
          <div className='flex justify-start gap-[20px] items-center'>
            <div className="flex items-center gap-4">
              <button
                className="bg-gray-200 px-4 py-2 rounded"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="bg-gray-200 px-4 py-2 rounded"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <button
              className="w-[300px] bg-black text-white px-6 py-3 rounded-xl mt-4"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className='flex items-center justify-between'>
        <h2 className="text-[20px] md:text-[24px] font-bold">Comments</h2>
        <button
          className="bg-black text-white px-4 py-2 rounded mt-4"
          onClick={() => setIsModalOpen(true)}
        >
          Add Comment
        </button>
        </div>
        <ul className="mt-4 p-[20px] flex items-center justify-between flex-wrap">
          {comments?.map((comment: Comment) => (
            <li key={comment.id} className="border-b py-4 w-[510px] ">
              <Rating value={comment.star} readOnly precision={0.5} />
              <h3 className="font-bold text-lg">{comment.author}</h3>
              <p>{comment.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DialogTitle>Add Comment</DialogTitle>
        <DialogContent className="flex flex-col gap-4">
          <TextField
            label="Author"
            value={commentData.author}
            onChange={(e) => setCommentData((prev) => ({ ...prev, author: e.target.value }))}
          />
          <TextField
            label="Comment"
            multiline
            rows={4}
            value={commentData.text}
            onChange={(e) => setCommentData((prev) => ({ ...prev, text: e.target.value }))}
          />
          <Rating
            value={commentData.star}
            onChange={(_, value) => setCommentData((prev) => ({ ...prev, star: value || 0 }))}
            precision={0.5}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
          <Button onClick={handleAddComment} variant="contained" color="primary">Submit</Button>
        </DialogActions>
      </Dialog>
    </section>
  );
};

export default Detail;
