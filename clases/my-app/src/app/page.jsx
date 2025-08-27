import AnimalCard from "@/components/AnimalCard";
import "./page.css";

import ButtomCustom from "@/components/Button";

export default function Home() {

  // declaracion de una constante ( recuerden que las variables de tipo const no se permiten volvel a asignar otro valor de nuevo )
  const name = "juan";
  // declaracion de varibles
  let numero = 12;
  // declaracion de un arreglo de tipo string
  const names = ['juan', 'camilo']
  // declaracion de un arreglo de objetos ( recueda que los areglos son tipo clave : valor, ejemplo "nombre": "camilo" )
  const animales = [
    {
      "icon": "",
      "name": "pepe",
      "raza": "golden",
      "tipo": "perro"
    },
    {
      "icon": "",
      "name": "lulu",
      "raza": "angora",
      "tipo": "gato"
    }
  ]


  return (
    <div id="" className="" >
      {/* visualizacion de varibles en la vista */}
      {/* recuerden que para visualizar o ejecutar codigo javaScrit se debe de poner los {} */}
      <h2>{name}</h2>
      <p>{numero}</p>
      <div>
        {
          /* renderizacion de arrays
          const numeros = [1,2,3,4]
          */
        }
        {/* variable.map(
        (elemento "la variable elemento va a contener el valor de la iteracion del array de numero 1,2,3,4", index "la variable index va a contener los indices 0,1,2,3")
          => ( "Dentro de los parentesisi se va a renderizar el elemento html, p,h1......h2,div......" )
         )  */
        }
        {
          names.map((n, index) => (<p key={index} >{n}</p>))
        }
      </div>
      <div>
        {/* mismo mecanismo que al listar un array unicamente que ahora el elemento va a ser un objeto y podremos acceder a sus propiedades elemento.name..... */}
        {
          animales.map((animal, index) => (
            <  AnimalCard key={index} name={animal.name} raza={animal.raza} tipo={animal.tipo} />
          ))
        }
      </div>
      <ButtomCustom name="Hola soy un boton" />
      <ButtomCustom name=''></ButtomCustom>
    </div>
  );
}
