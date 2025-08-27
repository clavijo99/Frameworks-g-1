export default function Home() {
  // declaración de constantes
  const name = "Juan";
  let numero = 12;

  // arreglo de strings
  const names = ["juan", "camilo"];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-md text-center">
        {/* visualización de variables */}
        <h2 className="text-3xl font-extrabold text-gray-800 mb-2">
          Hola, {name} 👋
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Número favorito:{" "}
          <span className="font-semibold text-indigo-600">{numero}</span>
        </p>

        {/* renderización de arrays */}
        <h3 className="text-xl font-semibold text-gray-700 mb-3">
          Listado de nombres:
        </h3>
        <div className="space-y-2">
          {names.map((n, index) => (
            <p
              key={index}
              className="bg-indigo-100 text-indigo-800 py-2 px-4 rounded-xl shadow-sm hover:bg-indigo-200 transition"
            >
              {n}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
