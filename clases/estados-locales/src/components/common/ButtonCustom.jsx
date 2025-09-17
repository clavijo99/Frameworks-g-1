'use client'

export default function ButtonCustom({texto, click}){

    return (
        <button className=" bg-white px-4 py-2 rounded shadow hover:bg-blue-400 text-black " onClick={click} >{texto}</button>
    )
}