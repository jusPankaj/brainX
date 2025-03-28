import { useState } from "react"
import Button from "./components/Button"
import Card from "./components/Card"
import CreateContentModal from "./components/CreateContentModal"
// import DeleteIcon from "./icons/DeleteIcon"
// import DocIcon from "./icons/DocIcon"
import { PlusIcon } from "./icons/PlusIcon"
import ShareIcon from "./icons/ShareIcon"
import Sidebar from "./components/Sidebar"



const App = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="bg-[#F9FBFC] h-screen ">
      <div>
        <Sidebar />
      </div>
      <CreateContentModal open={openModal} onClose={()=> setOpenModal(false)}/>
      <div className="flex justify-end gap-4 p-3">      
        <Button onClick={()=> setOpenModal(true)} variant="primary" text="Add Content" startIcon={<PlusIcon />}></Button>
        <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon />}></Button>
      </div>
      <div className="flex p-5 absolute left-72">
        <div>
          
        </div>
          <Card link="https://www.x.com/kirat_tw/status/1633685473821425666" title="Twitter" type="twitter"  />

          <Card link="https://www.youtube.com/watch?si=WcHgTueZwTQ_TYTg&v=gtqZQG9O5PI&feature=youtu.be" title="My Youtube" type="youtube"  />

      </div>
    </div>
  )
}

export default App