/**
 * Componente ButtonCustom
 * 
 * Este componente genera un botón con estilos de Tailwind.
 * 
 * Props:
 *  - name (string): texto que se mostrará en el botón.
 *    Si no recibe nada, muestra "Soy un botón".
 */

export default function ButtonCustom({ name }) {
  return (
    <button
      className="bg-indigo-600 text-white px-6 py-2 rounded-xl shadow-md hover:bg-indigo-700 active:scale-95 transition"
    >
      {name || "Soy un botón"}
    </button>
  );
}
