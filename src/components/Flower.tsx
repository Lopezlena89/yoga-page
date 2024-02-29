import Image from "next/image"

export const Flower = () => {
  return (
   <>
    <div className="w-full h-auto bg-orange-100 flex flex-col">
    <div className="w-full h-[600px] flex flex-col justify-center items-center relative">
        <div className="w-[300px] h-[400px] flex justify-center items-center relative m-auto">
            <Image loading="lazy" src={`/Vector-5a.webp`} width={100} height={100} alt="yoga" className="absolute top-0 m-auto "/>
            <Image loading="lazy" src={`/Vector-5a.webp`} width={100} height={100} alt="yoga" className="flower-1 img-flower1 absolute top-0 m-auto"/>
            <Image loading="lazy" src={`/Vector-5a.webp`} width={100} height={100} alt="yoga" className="flower-2 img-flower2 absolute top-0 m-auto"/>
            <Image loading="lazy" src={`/Vector-5a.webp`} width={100} height={100} alt="yoga" className="flower-3 img-flower3 absolute top-0 m-auto"/>
            <Image loading="lazy" src={`/Vector-5a.webp`} width={100} height={100} alt="yoga" className="flower-4 img-flower4 absolute top-0 m-auto"/>
            <Image loading="lazy" src={`/woman-meditating-in-yoga-asana-padmasana-lotus-pos-2021-04-03-03-47-25-utc-1.webp`} width={370} height={370} alt="yoga" className="z-10 absolute m-auto right-[7%]" />
        </div>
        <div className="w-full h-[100px] flex flex-col justify-center items-center  font-light text-amber-800 text-xl md:text-3xl mb-10 p-10 text-center">
            <p>{`"Yoga classes have never been so affordable. Do yoga anywhere, anytime, and as much as you like"`}</p>
        </div>
    </div>
    
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100px" fill="rgb(254 215 170)" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path className="elementor-shape-fill" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
        c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
        c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path>
    </svg>
    </div>
    
   </>
  )
}
