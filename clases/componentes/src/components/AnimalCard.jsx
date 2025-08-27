/**
 * Componente AnimalCard
 * 
 * Este componente recibe información de un animal (nombre, raza, tipo)
 *    y la muestra en una tarjeta con estilo.
 * 
 * Props:
 *  - name (string): nombre del animal
 *  - raza (string): raza del animal
 *  - tipo (string): tipo de animal (perro, gato, etc.)
 */

export default function AnimalCard({ name, raza, tipo }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-3 border hover:shadow-lg transition">
      <h2 className="text-lg font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">🐾 Raza: {raza}</p>
      <p className="text-gray-600">🔎 Tipo: {tipo}</p>
    </div>
  );
}
