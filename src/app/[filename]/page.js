"use client";

import axios from "axios";
import {useEffect, useState} from "react";
import Uploadicon from "../compundent/Uploadicon";
import TranscriptionEditor from "../compundent/TranscriptionEditor";
import clearTranscriptionItems from "../compundent/cleartranscriptionItems";

export default function FilePage({params}) {
    const filename = params.filename;
    const [isTranscribing, setIsTranscribing] = useState(false);
    const [awsTranscriptionItems, setAwsTranscriptionItems] = useState([]);
    const [isFetchingInfo, setIsFetchingInfo] = useState(false);

    useEffect(() => {
        getTranscription();
    }, [filename]);

    function getTranscription() {
        setIsFetchingInfo(true);
        axios.get("/api/transcription?filename=" + filename).then((response) => {
            setIsFetchingInfo(false);
            const status = response.data?.status;
            const transcription = response.data?.transcription;
            if (status == "IN_PROGRESS") {
                setIsTranscribing(true);
                setTimeout(getTranscription, 3000);
            } else {
                setIsTranscribing(false);

                setAwsTranscriptionItems(clearTranscriptionItems(transcription.results.items));
               
            }
        });
    }

    if (isTranscribing) {
        return <div>Transcribing your video...</div>;
    }

    if (isFetchingInfo) {
        return <div>Fetching information...</div>;
    }
    console.log(awsTranscriptionItems);
    return (
        <div>
          
            <div className="grid sm:grid-cols-2 gap-8 sm:gap-16">
                <div className="">
                    <h2 className="text-2xl mb-4 text-white/60">Transcription</h2>
                    <TranscriptionEditor
                        awsTranscriptionItems={awsTranscriptionItems}
                        setAwsTranscriptionItems={setAwsTranscriptionItems}
                    />
                </div>
                <div>
                    <h2 className="text-2xl mb-4 text-white/60">Result</h2>
                    <div className="sticky top-0">
                        <button className="p-2 bg-green-500  hover:bg-green-600 flex rounded-xl outline-none gap-1 font-semibold border-none  w-[170px] m-3 text- h-[40px]">
                            <Uploadicon />
                            Transcript Now
                        </button>

                        <div className="w-[328px] h-[580px] rounded-xl overflow-hidden">
                            <video
                                className=" w-full h-full "
                                controls
                                src={"https://rahul-auto-caption.s3.amazonaws.com/" + filename}
                            ></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        //     <div>
        //       <div className="grid grid-cols-2 gap-16">
        //       <div>
        //         <h2 className="text-2xl mb-4 text-white/70">Transcription</h2>
        //         <div className=" grid grid-cols-3 sticky top-0 bg-purple-700 p-2 rounded-md">
        //           <div>From</div>
        //           <div>End</div>
        //           <div>Content</div>
        //         </div>
        //          {awsTranscriptionItems.length > 0 && awsTranscriptionItems.map((item,key) => (
        //           <TranscriptionItem item={item} />

        //       ))}
        //       </div>
        //           <div className="flex flex-col sticky top-0">

        //           <h2 className="text-2xl mb-4 text-white/70">Result</h2>
        //         <div className="sticky top-0">
        //  <button className="p-2 bg-green-500  hover:bg-green-600 flex rounded-xl outline-none gap-1 font-semibold border-none  w-[170px] m-3 text- h-[40px]">
        //             <Uploadicon/>Transcript Now
        //           </button>

        //           <div className="w-[328px] h-[580px] rounded-xl overflow-hidden">
        //           <video className=" w-full h-full " controls  src={"https://rahul-auto-caption.s3.amazonaws.com/"+filename}></video>
        //           </div>

        //         </div>

        //           </div>
        //       </div>

        //     </div>
    );
}
