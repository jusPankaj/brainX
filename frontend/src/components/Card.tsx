import DeleteIcon from "../icons/DeleteIcon"
import DocIcon from "../icons/DocIcon"
import ShareIcon from "../icons/ShareIcon"


export interface CardProps {
    link : string,
    title : string,
    type: "youtube" | "twitter" | "document"
    heading?:string
}


const Card = ({link, title, type, heading} : CardProps) => {
  return (
    <div className="w-80 border border-black-1 p-2 rounded-md bg-white">
        <div className="flex justify-between">
            <span className="flex">
                 {type == "document"  && <DocIcon />  } 

                 {type == "twitter"  && <DocIcon />  } 

                 {type == "youtube"  && <DocIcon />  } 
                 {title}
            </span>
            {type === "document" &&<div> {heading}</div>}
            <div className="flex">
              <a target="_blank"><ShareIcon /></a>
            <DeleteIcon />
            </div>
        </div>
        <div className="pt-3">
          { type === "youtube" &&
        <iframe className="w-full" src={link.replace("watch","embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

        { type==="twitter" && <blockquote className="twitter-tweet"> 
            <a href={link.replace("x","twitter")}></a> 
            </blockquote>
        }
        </div>
    </div>
  )
}

// https://twitter.com/username/status/807811447862468608"


export default Card