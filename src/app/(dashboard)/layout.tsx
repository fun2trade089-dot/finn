import { redirect } from 'next/navigation'
import Sidebar from '@/components/dashboard/Sidebar'
import { createServerSupabaseClient } from '@/lib/supabase-server'
import Dashboard3D from '@/components/3d/Dashboard3D'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-[#030712] flex selection:bg-green-500/30 overflow-hidden">
      {/* 3D Background */}
      <Dashboard3D />
      
      <Sidebar />
      
      {/* Subtle Gradient Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px]" />
      </div>

      <main className="flex-1 ml-64 p-8 relative z-10 overflow-y-auto h-screen">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}
