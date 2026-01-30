import { login, signup } from './actions'
import { Code2, ArrowLeft, Mail, Lock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function LoginPage({
  searchParams,
}: {
  searchParams: { message: string; error: string }
}) {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#0B1120]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 mix-blend-overlay"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[100px] animate-pulse-slow delay-1000" />
      </div>

      <div className="max-w-md w-full space-y-8 glass-card p-8 rounded-3xl relative z-10 shadow-2xl shadow-black/50">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>
          
          <div className="flex justify-center mb-6">
            <div className="relative w-40 h-14">
              <Image 
                src="/logo.png" 
                alt="SBK Development Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight text-white mb-2">
            Área de Clientes
          </h2>
          <p className="text-sm text-gray-400">
            Accede a tu panel de control para gestionar proyectos y servicios.
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
              </div>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all sm:text-sm"
                placeholder="correo@empresa.com"
              />
            </div>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all sm:text-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button
              formAction={login}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all hover:scale-[1.02] shadow-lg shadow-blue-600/20"
            >
              Iniciar Sesión
            </button>
            <button
              formAction={signup}
              className="group relative w-full flex justify-center py-3 px-4 border border-white/10 text-sm font-medium rounded-xl text-gray-300 bg-transparent hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all hover:text-white"
            >
              Crear una cuenta
            </button>
          </div>

          {searchParams?.message && (
            <div className="text-center text-sm text-green-400 bg-green-500/10 p-4 rounded-xl border border-green-500/20 animate-pulse">
              {searchParams.message}
            </div>
          )}
           {searchParams?.error && (
            <div className="text-center text-sm text-red-400 bg-red-500/10 p-4 rounded-xl border border-red-500/20">
              {searchParams.error}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
