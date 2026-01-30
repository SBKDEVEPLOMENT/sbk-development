import { login, signup } from './actions'
import { Code2 } from 'lucide-react'
import Link from 'next/link'

export default function LoginPage({
  searchParams,
}: {
  searchParams: { message: string; error: string }
}) {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-md w-full space-y-8 bg-white/5 p-8 rounded-2xl border border-white/10">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-xl mb-4">
            <Code2 className="h-8 w-8 text-white" />
          </Link>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
            Área de Clientes
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Accede para ver el estado de tus proyectos o iniciar uno nuevo.
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-700 placeholder-gray-500 text-white bg-black/50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Dirección de correo electrónico"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-700 placeholder-gray-500 text-white bg-black/50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Contraseña"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button
              formAction={login}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Iniciar Sesión
            </button>
            <button
              formAction={signup}
              className="group relative w-full flex justify-center py-3 px-4 border border-gray-700 text-sm font-medium rounded-lg text-gray-300 bg-transparent hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Registrarse
            </button>
          </div>

          {searchParams?.message && (
            <div className="text-center text-sm text-green-400 bg-green-900/20 p-3 rounded-lg border border-green-900/50">
              {searchParams.message}
            </div>
          )}
           {searchParams?.error && (
            <div className="text-center text-sm text-red-400 bg-red-900/20 p-3 rounded-lg border border-red-900/50">
              {searchParams.error}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
