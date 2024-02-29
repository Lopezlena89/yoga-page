import { Cards } from "@/components/Cards";
import { Flower } from "@/components/Flower";
import { Instalaciones } from "@/components/Instalaciones";
import Link from "next/link";


export default function Home() {
  return (
    <main className="w-full h-auto bg-orange-100">
      <section className="yoga-photo flex flex-col justify-between w-full h-[800px] bg-[url('/yoga.webp')] bg-cover bg-center bg-no-repeat ">
          <div className="w-full h-20 flex justify-end">
            <nav className="w-[400px] h-[20] flex items-center justify-around text-sm font-ligth text-zinc-400">
              <Link href="#salones" >Salones</Link>
              <Link href="#clases">Clases</Link>
              <Link href="#">Nosotros</Link>
              <Link href="#">Contacto</Link>
            </nav>
          </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(254 215 170)" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path className="elementor-shape-fill" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
        c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
        c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path>
      </svg>
      <Instalaciones/>
      <Cards/>
      <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(254 215 170)" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path className="elementor-shape-fill" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
        c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
        c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path>
      </svg>
      <Flower/>
    </main>
  );
}
