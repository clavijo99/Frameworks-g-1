'use client'

import { useState } from 'react'
import ButtonCustom from "@/components/common/ButtonCustom";

export default function Home() {
  const [nombre, setNombre] = useState('Camilo')
  const [numero, setNumero ] = useState(0)

  function incrementar(){
    setNumero((n) => n + 1)
  }

  function decrementar(){
    if( numero > 0 ){
      setNumero((n) => n - 1)
    }else{
      alert('El numero no puede ser negativo')
    }
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <p>{nombre}</p>
      <ButtonCustom texto="Actualizar" click={() => setNombre("Juan")} />

      <div>
        <div className='flex'>
          <ButtonCustom texto="+" click={incrementar} />
          <p className='px-4' >{numero}</p>
          <ButtonCustom texto="-" click={decrementar} />
        </div>

        <p className='py-6'>El numero {numero} es { numero %2== 0 ? 'Par': 'Impar' }</p>
      </div>
    </div>
  );
}
