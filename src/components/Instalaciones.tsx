import Image from 'next/image'
import React from 'react'

export const Instalaciones = () => {
  return (
    <>
        <div id="salones" className='w-full h-[600px] flex flex-col bg-orange-200'>
            <div className='w-full h-[80%] flex'>
              <div className='w-1/2 h-full flex justify-center items-center'>
                  <Image width={500} height={500} src="/AYG_Alta-13.webp" alt="instalaciones" className='rounded-xl'/>
              </div>
              <div className='w-1/2 h-full flex justify-center items-center text-sm font-light'>
                  <div className='w-[80%] h-[80%] flex flex-col justify-center items-center'>
                  <p>Nuestro salón principal, el más amplio, con vista al jardín y al estanque, construido con una arquitectura basada en técnicas ancestrales y materiales naturales.</p>
                  <p>Medidas:</p>
                  <p>11.50m de largo x 7.90m de ancho</p>
                  <p>Capacidad:</p>
                  <p>Tipo auditorio, sillas: 40</p>
                  <p>Tipo escuela, sillas y mesas: 30 Herradura, sillas y mesas: 30</p>
                  <p> Zafus, tipo auditorio: 25</p>
                  <p>Zafus, en círculo: 25</p>
                  <p>Tapetes de yoga: 20</p>
                  <p>Cuota de recuperación:</p>
                  <p>$1,800 - $3,600 mxn por hora</p>
                  <p>Esta tarifa es una aproximación, se requieren más datos para una cotización formal final*
                  Precios sujetos a cambio sin previo aviso
                  No hay reembolso en caso de cambio de fecha o cancelación del evento*</p>
                  </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(255 237 213)"  viewBox="0 0 1000 100" preserveAspectRatio="none">
              <path className="elementor-shape-fill" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
              c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
              c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path>
            </svg>
        </div>
    </>
  )
}
