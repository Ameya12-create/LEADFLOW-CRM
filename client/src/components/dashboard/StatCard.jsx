import { motion } from "framer-motion"

function StatCard({ title, value, icon: Icon, color }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className="
        relative
        overflow-hidden
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
        rounded-3xl
        p-6
        shadow-2xl
      "
    >

      <div className="
        absolute
        top-0
        right-0
        w-32
        h-32
        bg-white/5
        rounded-full
        blur-3xl
      " />

      <div className="relative z-10 flex items-center justify-between">

        <div>

          <p className="text-gray-400 text-sm">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {value}
          </h2>

        </div>

        <div
          className={`
            w-16
            h-16
            rounded-2xl
            flex
            items-center
            justify-center
            shadow-lg
            ${color}
          `}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>

      </div>

    </motion.div>
  )
}

export default StatCard