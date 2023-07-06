export default function Login() {
  return (
    <main className="bg-neutral-950 min-h-screen flex flex-col justify-center items-center text-neutral-100">
      <div>
        <p className="text-3xl pb-10">Iniciar Sesión</p>
      </div>
      <form className="border rounded-lg">
        <div className="mb-6 px-8 py-4">
          <label
            for="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-xl "
          >
            Usuario:
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-96 "
          />
        </div>
        <div className="mb-6 px-8 ">
          <label
            for="passwonr"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-xl"
          >
            Ingresa la Contraseña:
          </label>
          <input
            type="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="text-center">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Ingresar
            </span>
          </button>
        </div>
      </form>
    </main>
  );
}
