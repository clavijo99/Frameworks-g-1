
// creamos  definimos un componentes para renderizar una lista de numeros que nos llega atravez de las props
export default function Lista({ numeros }) {
    return (
        <ul>
            {numeros.map((n, i) => (
                <li key={i}>{n}</li>
            ))}
        </ul>
    )
}