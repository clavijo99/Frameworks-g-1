export default function User({nombre, apellido, edad}){
    return (
        <h1 className=" text-2xl hover:text-red-400 "> Hola {nombre} {apellido}  tu edad es {edad}</h1>
    )
}