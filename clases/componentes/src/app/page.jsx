import AnimalCard from "@/components/AnimalCard";
import ButtonCustom from "@/components/ButtonCustom";

/**
 * Vista Home
 * 
 * Aquí mostramos cómo usar los componentes AnimalCard y ButtonCustom.
 *    Creamos un listado de animales y mostramos botones de ejemplo.
 */

export default function Home() {
  // Creamos un arreglo de animales
  const animales = [
    { name: "Pepe", raza: "Golden", tipo: "Perro" },
    { name: "Lulu", raza: "Angora", tipo: "Gato" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Ejemplo de Componentes</h1>

      {/* Renderizamos cada AnimalCard */}
      <div className="space-y-3">
        {animales.map((animal, index) => (
          <AnimalCard
            key={index}
            name={animal.name}
            raza={animal.raza}
            tipo={animal.tipo}
          />
        ))}
      </div>

      {/* Renderizamos botones */}
      <div className="mt-6 flex gap-4">
        <ButtonCustom name="Hola soy un botón" />
        <ButtonCustom />
      </div>
    </div>
  );
}
