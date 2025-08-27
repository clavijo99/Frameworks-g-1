

// esta es la estructura 
// props = {
//     'name': 'juan',
//     'id': 12
// }


// // creamos un componente haciendo uso de props
// export default function Saludar(props){
//     return (
//         <p className=" text-red-600 font-bold text-6xl hover:text-yellow-500 " >Hola { props.name }, tienes { props.edad } Años</p>
//     )
// }

// creamos un componente  aplicando destructuracion
export default function Saludar({name, edad}){
    return (
        <p className=" text-red-600 font-bold text-6xl hover:text-yellow-500 " >Hola { name }, tienes { edad } Años</p>
    )
}