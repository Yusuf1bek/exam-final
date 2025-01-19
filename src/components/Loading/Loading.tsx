import "./Loading.css"

const Loading = () => {
  return (
    <div className="container flex justify-center items-center mt-[100px] mb-[100px]">
<svg viewBox="0 0 240 240" height="240" width="240" className="pl">
	<circle strokeLinecap="round" strokeDashoffset="-330" strokeDasharray="0 660" strokeWidth="20" stroke="#000" fill="none" r="105" cy="120" cx="120" className="pl__ring pl__ring--a"></circle>
	<circle strokeLinecap="round" strokeDashoffset="-110" strokeDasharray="0 220" strokeWidth="20" stroke="#000" fill="none" r="35" cy="120" cx="120" className="pl__ring pl__ring--b"></circle>
	<circle strokeLinecap="round" strokeDasharray="0 440" stroke-didth="20" stroke="#000" fill="none" r="70" cy="120" cx="85" className="pl__ring pl__ring--c"></circle>
	<circle strokeLinecap="round" strokeDasharray="0 440" stroke-didth="20" stroke="#000" fill="none" r="70" cy="120" cx="155" className="pl__ring pl__ring--d"></circle>
</svg>
    </div>
  )
}

export default Loading