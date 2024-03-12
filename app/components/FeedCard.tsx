import React from "react";

import Image from "next/image";
import { BiMessage, BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
export const FeedCard:React.FC=()=>{
    return <div className="border border-l-0 border-r-0 border-gray-400 p-4 hover:bg-slate-900 cursor-pointer transition-all">
        <div className="grid grid-cols-12 gap-2">
            <div className="col-span-1">
              <Image src={'https://avatars.githubusercontent.com/u/111703927?v=4'}
               alt={"hi there"}
               height={50} 
               width={50}
              />
            </div>
            <div className="col-span-11">
                 <h5>Himashis</h5>
                 <p>
                    This is my Content
                 </p>
                 <div className="flex justify-between mt-5 text-xl">
                    <div>
                        <BiMessageRounded/>
                    </div>
                     <div>
                        <FaRetweet/>
                     </div>
                     <div>
                        <AiOutlineHeart/>
                     </div>
                     <div>
                        <BiUpload/>
                     </div>
                 </div>
            </div>
        </div>
    </div>
}