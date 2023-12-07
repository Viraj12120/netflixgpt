import { Play, Info } from "lucide-react";
const VideoTitle = ({ title, overview }) => {
	return (
		<div className="absolute pt-[20%] px-16 mt-11mt-0.5 -my-11 bg-gradient-to-r from-black aspect-video w-screen ">
			<h1 className="my-1 text-3xl text-white font-bold">{title}</h1>
			<p className="hidden md:inline-block my-1 py-6 text-base text-white  w-1/4">
				{overview}
			</p>
			<div>
				<button
					className=" h-12 cursor-pointer transition-all 
bg-white text-black px-8 py-2 rounded-lg
border-red-500
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-red-400 shadow-red-400 active:shadow-none text-b">
					<Play fill="white" className="inline w-5 mb-1 bg-white" />
					Play
				</button>
				<button
					className="h-12 mx-20 cursor-pointer transition-all 
bg-white text-black px-8 py-2  rounded-lg
border-red-500
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-red-400 shadow-red-400 active:shadow-none">
					<Info fill="white" className="inline w-5 mb-1  bg-white" />
					More Info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
