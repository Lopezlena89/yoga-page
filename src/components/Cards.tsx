import { getDataText } from "@/text/get-text"
import { CardRigth } from "./CardRigth"
import { CardLeft } from "./CardLeft"


export const Cards = () => {
  return (
    <>
        <section id="clases" className="w-full h-[2700px] bg-orange-100 flex flex-col ">
            {
                getDataText.map((card,index)=>(
                    index % 2 === 0 
                    ? <CardLeft key={index} card={card}/>
                    : <CardRigth key={index} card={card}/> 
                ))
            }
        </section>
    </>
  )
}
