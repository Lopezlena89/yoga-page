
import Image from "next/image";

interface Props{
    card:{
        title:string,
        text:string,
        img:string[]
    }
}

export const CardLeft = ({card}:Props) => {
    const {title,text,img} = card;
  return (
    <>
        <div className="w-full h-[500px] flex ">
            <div className="w-1/2 h-full relative left ">
                <Image loading="lazy" src={`/${img[0]}.webp`} width={400} height={400} alt={title} className="img-left absolute rounded-xl top-10 left-14 rotate-[350deg]"/>
                <Image loading="lazy" src={`/${img[1]}.webp`} width={400} height={400} alt={title} className="img-left absolute rounded-xl right-14 bottom-2 rotate-[350deg]"/>
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center items-center p-5 relative">
                <div className="w-[400px] h-[400px] flex flex-col justify-center items-center rounded-full bg-orange-200 opacity-30 absolute "/>
                <div className="w-[50%] h-[50%] flex flex-col justify-center items-center z-10">
                    <p className="text-xl font-extrabold ">{title}</p>
                    <p>{text}</p>
                </div>
            </div>

        </div>
    </>
  )
}
