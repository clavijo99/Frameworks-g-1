// creacion de un componente 


const user = {
    'name': 'juan',
    'id': 1234
}

const { name, id } = user;

export default function ButtomCustom({ name, click }) {
    return (
        <button className=" bg-white px-4 py-2 text-black rounded shadow-2xl">{name}</button>
    )
}