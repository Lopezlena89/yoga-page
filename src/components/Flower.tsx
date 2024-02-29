import Image from "next/image"

export const Flower = () => {
  return (
   <>
    <div className="w-full h-[600px] bg-orange-200 flex flex-col">
    <div className="w-full h-[500px] flex justify-center items-center relative">
        <Image loading="lazy" src={`/Vector-5a.webp`} width={180} height={180} alt="yoga" className="absolute top-0 m-auto"/>
        <Image loading="lazy" src={`/Vector-5a.webp`} width={180} height={180} alt="yoga" className="flower-1 absolute top-0 m-auto"/>
        <Image loading="lazy" src={`/Vector-5a.webp`} width={180} height={180} alt="yoga" className="flower-2 absolute top-0 m-auto"/>
        <Image loading="lazy" src={`/Vector-5a.webp`} width={180} height={180} alt="yoga" className="flower-3 absolute top-0 m-auto"/>
        <Image loading="lazy" src={`/Vector-5a.webp`} width={180} height={180} alt="yoga" className="flower-4 absolute top-0 m-auto"/>
        <Image loading="lazy" src={`/woman-meditating-in-yoga-asana-padmasana-lotus-pos-2021-04-03-03-47-25-utc-1.webp`} width={370} height={370} alt="yoga" className="z-10 " />
    </div>
    
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100px" fill="rgb(255 237 213)" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path className="elementor-shape-fill" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
        c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
        c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path>
    </svg>
    </div>
    
   </>
  )
}
