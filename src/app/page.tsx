
import { Button } from "@/components/Button";
import { Flower } from "@/components/Flower";
import { Footer } from "@/components/Footer";
import { Instalaciones } from "@/components/Instalaciones";
import { Services } from "@/components/Services";
import { Trainer } from "@/components/Trainer";
import { Wall } from "@/components/Wall";



export default function Home() {
  return (
    <main className="w-full h-auto bg-orange-100">
      <section  id="home" className="yoga-photo flex flex-col justify-between w-full h-[800px] bg-[url('/yoga.webp')] bg-cover bg-center bg-no-repeat ">
          <Button/>
      </section>
      <Wall/>
      <Instalaciones/>
      
     
      <Flower/>
      <Services/>
     
      <Trainer/>
      <Footer/>
    </main>
  );
}
