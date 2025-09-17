'use client'

import { useState } from 'react'

import ButtonCustom from "@/components/common/ButtonCustom";


export default function Home() {

  const [nombre, setNombre] = useState('Camilo')


  var numero = 0


  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <p>{nombre}</p>
      <ButtonCustom texto="Actualizar" click={() => setNombre("Juan")} />

      <div>
        <div className='flex'>
          <ButtonCustom texto="+" />
          <p className='px-4' >{numero}</p>
          <ButtonCustom texto="-" />

        </div>
      </div>
    </div>
  );
}
