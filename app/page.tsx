import Image from "next/image";
import React from "react";
import { BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import {BsBell, BsBookmark, BsEnvelope, BsTwitter} from 'react-icons/bs'
import { FeedCard } from "./components/FeedCard";
interface TwitterSideBarButton{
    title:String,
    icon:React.ReactNode
}
const sideBarMenuItems:TwitterSideBarButton[]=[
  {
    title:'Home',
    icon:<BiHomeCircle/>
  },
  {
    title:'explore',
    icon:<BiHash/>
  },
  {
    title:'Notifications',
    icon:<BsBell/>
  },
  {
    title:'Messages',
    icon:<BsEnvelope/>
  },
  {
    title:'Bookmarks',
    icon:<BsBookmark/>
  },
  {
    title:'profile',
    icon:<BiUser/>
  },

  
]
let x=0;
export default function Home() {
  return (
      <div className="grid grid-cols-12 gap-3 h-screen w-screen px-52">
     
        <div className="col-span-3  pt-8 px-4 ">
          <div className="text-3xl h-fit w-fit p-4 hover:bg-gray-500 rounded-full cursor-pointer">
          <BsTwitter />
          </div>
          <div className="mt-4 text-2xl font-semibold pr-4">
            <ul>
            {
            sideBarMenuItems.map((element)=>{
              x=x+1;
              return (
                
                <li key={x} className="flex mt-2 justify-start items-center gap-4 hover:bg-gray-800 rounded-lg px-5 py-2 cursor-pointer w-fit">
                  <span>
                    {element.title}
                  </span>
                  <span>
                    {element.icon}
                  </span>
                  </li>
                  
              )
            })}
            </ul>
            <button className= "bg-sky-500 p-4  rounded-full w-full mt-4 text-lg"> Tweet </button>
          </div>
          
          </div>
        <div className="col-span-5 border-r-[1px] overflow-scroll h-screen border-l-[1px] border-gray-400">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        <div className="col-span-3"></div>
      </div>
  );
}
