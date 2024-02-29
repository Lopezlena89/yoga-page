
import Image from "next/image";

interface Props{
    card:{
        title:string,
        text:string,
        img:string[]
    }
}

export const CardRigth = ({card}:Props) => {
    const {title,text,img} = card;
  return (
    <>
        <div className="w-full h-[500px] flex">
            
            <div className="w-1/2 h-full flex flex-col justify-center items-center p-5">
                <div className="w-[400px] h-[400px] flex flex-col justify-center items-center rounded-full bg-orange-200 opacity-30 absolute "/>
                <div className="w-[50%] h-[50%] flex flex-col justify-center items-center z-10">
                    <p className="text-xl font-extrabold ">{title}</p>
                    <p>{text}</p>
                </div>
            </div>
            <div  className="w-1/2 h-full relative right ">
                <Image loading="lazy" src={`/${img[0]}.webp`} width={300} height={300} alt={title} className="img-right absolute rounded-xl top-0 right-24 rotate-[10deg]"/>
                <Image loading="lazy" src={`/${img[1]}.webp`} width={300} height={300} alt={title} className="img-right absolute rounded-xl left-20 bottom-12 rotate-[10deg]"/>
            </div>
            

        </div>
    </>
  )
}
