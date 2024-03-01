
export const Trainer = () => {
  return (
    <>
        <section id="trainer" className="w-screen h-auto  bg-orange-200 flex flex-col items-center justify-start pt-10">
            <div className="w-[50%] h-[200px] flex flex-col justify-center items-center">
                <h2 className="font-thin text-amber-600 text-2xl">Our trainer</h2>
                <p className="font-medium text-center text-amber-800 text-5xl mt-5">Meet the experts</p>
            </div>
            <div className="w-full h-[600px] md:h-[300px] grid grid-cols-2 md:grid-cols-4">
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <div className="bg-[url('/Frank-on-mat.webp')] bg-cover bg-top bg-no-repeat w-[150px] h-[150px] rounded-full"/>
                    <div className="w-full h-auto flex flex-col justify-center items-center">
                        <span className="font-medium text-center text-amber-800">Malik Khan</span>
                        <span className="font-thin text-amber-600 ">Meditation</span>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <div className="bg-[url('/IMG_6871.webp')] bg-cover bg-center bg-no-repeat w-[150px] h-[150px] rounded-full"/>
                    <div className="w-full h-auto flex flex-col justify-center items-center">
                        <span className="font-medium text-center text-amber-800">Edward Ward</span>
                        <span className="font-thin text-amber-600 ">Meditation</span>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <div className="bg-[url('/privateyogatherapysmall.webp')] bg-cover bg-top bg-no-repeat w-[150px] h-[150px] rounded-full"/>
                    <div className="w-full h-auto flex flex-col justify-center items-center">
                        <span className="font-medium text-center text-amber-800">Maria Peterson</span>
                        <span className="font-thin text-amber-600 ">Yoga Therapist</span>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <div className="bg-[url('/Tiffanycoombs1.webp')] bg-cover bg-top bg-no-repeat w-[150px] h-[150px] rounded-full"/>
                    <div className="w-full h-auto flex flex-col justify-center items-center">
                        <span className="font-medium text-center text-amber-800">Lena Gronholm</span>
                        <span className="font-thin text-amber-600 ">Pilates Instructor</span>
                    </div>
                </div>
            </div>
            
        </section>
    </>
  )
}
