import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#020617] text-white overflow-hidden">

      {/* Background Glow Effects */}

      <div className="
        absolute
        top-0
        left-0
        w-[500px]
        h-[500px]
        bg-purple-500/20
        blur-[120px]
        rounded-full
      " />

      <div className="
        absolute
        bottom-0
        right-0
        w-[500px]
        h-[500px]
        bg-cyan-500/20
        blur-[120px]
        rounded-full
      " />

      <Sidebar />

      <div className="flex-1 relative z-10">

        <Navbar />

        <div className="p-8">
          {children}
        </div>

      </div>

    </div>
  )
}

export default MainLayout