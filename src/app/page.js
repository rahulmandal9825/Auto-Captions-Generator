import {Hero} from "./compundent/Hero";
import Uploadfile from "./compundent/Uploadfile";
import Uploadicon from "./compundent/Uploadicon";
import VideoShow from "./compundent/VideoShow";

export default function Home() {
    return (
        <>
            <Hero Text1={"Add Auto captions to your video"} Text2={"Just Upload your video and we will do the Rest"} />
            <div className="text-center mt-5 ">
              
            <Uploadfile/>
               
            </div>
            <VideoShow />
        </>
    );
}
