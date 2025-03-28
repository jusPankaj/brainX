import { ReactElement, ReactHTMLElement, useState } from "react";
import CrossIcon from "../icons/CrossIcon";
import Button from "./Button";


const CreateContentModal = ({open, onClose}) => {
  return (<>
    { open &&<div className="w-screen h-screen top-0 left-0 bg-black/20  fixed ">
      
      <div className="w-[480px] h-4/5 border bg-white opacity-100 relative top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded">
        <div className="">
          <div onClick={onClose} className="cursor-pointer flex justify-end text-red-700  mr-2 mt-2"> 
            <CrossIcon /> 
          </div>
          <div className="flex flex-col p-4">
            <Input placeholder="title" onChange={(e:React.ChangeEvent<HTMLInputElement>) => e.target.value}/>
            <Input placeholder="Link" onChange={(e:React.ChangeEvent<HTMLInputElement>) => e.target.value}/>
            <div><Button variant="primary" text="Submit" /> </div>
          </div>
        </div>
      </div>
    </div>}
    </>
  )
}

export const Input =({onChange, placeholder } : {onChange: ()=> void})=>{
    return<>
      <input placeholder={placeholder} type={"text"} className="px-4 py-2" onChange={onChange} ></input>
    </>
}

export default CreateContentModal