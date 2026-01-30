import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Settings, LogOut, LayoutDashboard, FileText, Bell } from 'lucide-react'

export default async function DashboardPage() {
  const supabase = await createClient()

  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container-width">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Panel de Control</h1>
              <p className="text-gray-400">Bienvenido de nuevo, {user.email}</p>
            </div>
            <form action="/auth/signout" method="post">
              <button 
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-red-500/10 text-gray-300 hover:text-red-400 border border-white/10 rounded-full transition-all text-sm font-medium"
                type="submit"
              >
                <LogOut className="w-4 h-4" /> Cerrar Sesión
              </button>
            </form>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400">Proyectos Activos</span>
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  <LayoutDashboard className="w-5 h-5" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">0</div>
              <div className="text-sm text-gray-500">Sin proyectos en curso</div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400">Facturas Pendientes</span>
                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                  <FileText className="w-5 h-5" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">0</div>
              <div className="text-sm text-gray-500">Todo al día</div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400">Notificaciones</span>
                <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                  <Bell className="w-5 h-5" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">1</div>
              <div className="text-sm text-gray-500">Bienvenida al sistema</div>
            </div>
          </div>

          {/* Content Area */}
          <div className="glass-card p-8 rounded-3xl text-center py-20">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Settings className="w-8 h-8 text-gray-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No hay actividad reciente</h3>
            <p className="text-gray-400 max-w-md mx-auto mb-8">
              Aquí aparecerán tus proyectos, facturas y comunicaciones con el equipo de SBK Development una vez que iniciemos un proyecto.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors">
              Solicitar Nuevo Proyecto
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}