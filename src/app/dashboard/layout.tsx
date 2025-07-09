import Navbar from '@/components/Navbar/Navbar'

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}
