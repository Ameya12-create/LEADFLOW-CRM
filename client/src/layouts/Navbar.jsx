import { Bell, Search } from "lucide-react"

function Navbar() {
  return (
    <div
      className="
        h-20
        border-b
        border-white/10
        flex
        items-center
        justify-between
        px-8
        bg-white/5
        backdrop-blur-xl
      "
    >

      <div className="
        flex
        items-center
        gap-3
        bg-white/5
        px-4
        py-3
        rounded-2xl
        w-[350px]
      ">
        <Search className="w-5 h-5 text-gray-400" />

        <input
          type="text"
          placeholder="Search leads..."
          className="
            bg-transparent
            outline-none
            text-sm
            w-full
            text-white
            placeholder:text-gray-500
          "
        />
      </div>

      <div className="flex items-center gap-5">

        <button className="
          p-3
          rounded-2xl
          bg-white/5
          hover:bg-white/10
          transition-all
        ">
          <Bell className="w-5 h-5" />
        </button>

        <div className="
          flex
          items-center
          gap-3
          bg-white/5
          px-4
          py-2
          rounded-2xl
        ">
          <div className="
            w-10
            h-10
            rounded-full
            bg-gradient-to-r
            from-indigo-500
            to-purple-600
            flex
            items-center
            justify-center
            font-bold
          ">
            A
          </div>

          <div>
            <h3 className="text-sm font-semibold">
              Ameya
            </h3>

            <p className="text-xs text-gray-400">
              Admin
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar