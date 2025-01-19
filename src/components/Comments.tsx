import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Rating } from "@mui/material";
import Loading from "./Loading/Loading";

type Comment = {
  id: string;
  author: string;
  text: string;
  star: number;
};

const fetchComments = async (): Promise<Comment[]> => {
  const response = await axios.get(
    "https://6787c574c4a42c9161082cce.mockapi.io/comments"
  );
  return response.data;
};

const Comments: React.FC = () => {
  const { data: comments, isLoading, isError } = useQuery<Comment[]>({
    queryKey: ["comments"],
    queryFn: fetchComments,
  });
  if (isLoading) {
    return (
      <div className="text-center">
        <Loading />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="text-center text-red-500">
        Failed to fetch comments. Please try again later.
      </div>
    );
  }
  const fiveStarComments = comments?.filter((comment) => comment.star === 5);
  const limitedComments = fiveStarComments?.slice(0, 6);

  return (
    <section className="mb-[80px] mt-[80px]">
      <div className="container">
        <h2 className="font-[800] text-[48px] leading-[57px] mb-[32px] text-center">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px]">
          {limitedComments?.map((comment) => (
            <div
              key={comment.id}
              className="border p-4 rounded-lg shadow-md bg-white"
            >
              <div className="flex items-center gap-[15px] mb-[16px]">
                <span className="font-[700] text-[16px] text-black">
                  {comment.author}
                </span>
              </div>
              <Rating
                name={`rating-${comment.id}`}
                value={comment.star}
                precision={0.5}
                readOnly
                className="mb-4"
              />
              <p className="text-[16px] text-gray-600">{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comments;
