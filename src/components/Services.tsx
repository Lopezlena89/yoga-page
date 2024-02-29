import Image from "next/image"


export const Services = () => {
  return (
    <>
        <section className="w-full h-auto flex flex-col bg-orange-200 items-center">
          <div className="w-[70%] h-[250px] flex flex-col justify-center items-center">
              <h2 className="font-thin text-amber-600 text-xl md:text-2xl">Services</h2>
              <p className="font-medium text-center text-amber-800 text-2xl md:text-5xl mt-5">What we offer to you</p>
              <p className="font-thin text-center text-amber-800 text-md md:text-xl mt-5">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor nisi elit consequat, ipsum nec sagittis.</p>
          </div>
          <div className="w-full h-auto grid grid-cols-3 ">
            <div className="in-out w-full h-full p-5 flex flex-col justify-center items-center">
                <Image loading="lazy" src='/icon-01b.webp' alt="relief" width={100} height={100} className="text-center"/>
                <p className="font-medium text-center text-amber-800 mt-5">Anxiety Relief</p>
                <p className="font-thin text-center text-amber-800 text-sm md:text-lg mt-3">Sed ut perspiciatis unde omnis iste natus error sit.</p>
            </div>
            <div className="in-out w-full h-full p-5 flex flex-col justify-center items-center">
                <Image loading="lazy" src='/icon-04.webp' alt="Flexibel Time" width={100} height={100} className="text-center"/>
                <p className="font-medium text-center text-amber-800 mt-5">Flexibel Time</p>
                <p className="font-thin text-center text-amber-800 mt-3 text-sm md:text-lg ">Sed ut perspiciatis unde omnis iste natus error sit.</p>
            </div>
            <div className="in-out w-full h-full p-5 flex flex-col justify-center items-center">
                <Image loading="lazy" src='/icon-02.webp' alt="Reduce Stress" width={100} height={100} className="text-center"/>
                <p className="font-medium text-center text-amber-800 mt-5">Reduce Stress</p>
                <p className="font-thin text-center text-amber-800 mt-3 text-sm md:text-lg">Sed ut perspiciatis unde omnis iste natus error sit.</p>
            </div>
          </div>
          <div className=" w-full h-full grid grid-cols-3">
            <div className="in-out w-full h-full p-5 flex flex-col justify-center items-center">
                <Image loading="lazy" src='/icon-03.webp' alt="relief" width={100} height={100} className="text-center"/>
                <p className="font-medium text-center text-amber-800 mt-5">Life Balancing</p>
                <p className="font-thin text-center text-amber-800 mt-3 text-sm md:text-lg">Sed ut perspiciatis unde omnis iste natus error sit.</p>
            </div>
            <div className="in-out w-full h-full p-5 flex flex-col justify-center items-center">
                <Image loading="lazy" src='/icon-06.webp' alt="Flexibel Time" width={100} height={100} className="text-center"/>
                <p className="font-medium text-center text-amber-800 mt-5">Health Tips</p>
                <p className="font-thin text-center text-amber-800 mt-3 text-sm md:text-lg">Sed ut perspiciatis unde omnis iste natus error sit.</p>
            </div>
            <div className="in-out w-full h-full p-5 flex flex-col justify-center items-center">
                <Image loading="lazy" src='/icon-05.webp' alt="Reduce Stress" width={100} height={100} className="text-center"/>
                <p className="font-medium text-center text-amber-800 mt-5">Health Report</p>
                <p className="font-thin text-center text-amber-800 mt-3 text-sm md:text-lg">Sed ut perspiciatis unde omnis iste natus error sit.</p>
            </div>
          </div>
        </section>
    </>
  )
}
