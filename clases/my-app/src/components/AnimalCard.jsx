export default function AnimalCard({ name, raza, tipo  }){


    return (
        <div className=" flex flex-col bg-pink-500 rounded shadow-2xl p-4 w-32 ">
            <h3>Raza: { raza }</h3>
            <h2>Nombre: { name }</h2>
            <p>Tipo: { tipo }</p>
        </div>
    )
}