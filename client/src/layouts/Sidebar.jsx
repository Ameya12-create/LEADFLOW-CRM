import { useContext } from "react"

import {
  NavLink,
  useNavigate,
} from "react-router-dom"

import {
  LayoutDashboard,
  Users,
  KanbanSquare,
  LogOut,
} from "lucide-react"

import { AuthContext } from "../context/AuthContextProvider"

function Sidebar() {

  const { logout } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleLogout = () => {

    logout()

    navigate("/login")
  }

  const navItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: <LayoutDashboard className="w-5 h-5" />,
    },

    {
      name: "Leads",
      path: "/leads",
      icon: <Users className="w-5 h-5" />,
    },

    {
      name: "Pipeline",
      path: "/pipeline",
      icon: <KanbanSquare className="w-5 h-5" />,
    },
  ]

  return (
    <div
      className="
        w-72
        min-h-screen
        bg-[#0f172a]
        border-r
        border-white/10
        p-6
        flex
        flex-col
        justify-between
      "
    >

      <div>

        <h1
          className="
            text-3xl
            font-extrabold
            bg-gradient-to-r
            from-indigo-400
            to-purple-500
            bg-clip-text
            text-transparent
            mb-10
          "
        >
          LeadFlow
        </h1>

        <div className="space-y-3">

          {navItems.map((item) => (

            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `
                  flex
                  items-center
                  gap-3
                  px-5
                  py-4
                  rounded-2xl
                  transition-all
                  ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
                      : "hover:bg-white/10 text-gray-300"
                  }
                `
              }
            >

              {item.icon}

              {item.name}

            </NavLink>

          ))}

        </div>

      </div>

      <button
        onClick={handleLogout}
        className="
          flex
          items-center
          gap-3
          px-5
          py-4
          rounded-2xl
          bg-white/5
          hover:bg-red-500/20
          text-red-400
          transition-all
        "
      >

        <LogOut className="w-5 h-5" />

        Logout

      </button>

    </div>
  )
}

export default Sidebar