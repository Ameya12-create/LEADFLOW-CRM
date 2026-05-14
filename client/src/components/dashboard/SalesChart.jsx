import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts"

const data = [
  { month: "Jan", leads: 40 },
  { month: "Feb", leads: 65 },
  { month: "Mar", leads: 90 },
  { month: "Apr", leads: 75 },
  { month: "May", leads: 120 },
  { month: "Jun", leads: 150 },
]

function SalesChart() {
  return (
    <div
      className="
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
        rounded-3xl
        p-6
        h-[400px]
      "
    >

      <div className="mb-6">

        <h2 className="text-2xl font-bold">
          Lead Analytics
        </h2>

        <p className="text-gray-400 text-sm mt-1">
          Monthly lead acquisition performance
        </p>

      </div>

      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>

          <XAxis
            dataKey="month"
            stroke="#94A3B8"
          />

          <Tooltip />

          <Bar
            dataKey="leads"
            radius={[12, 12, 0, 0]}
          />

        </BarChart>
      </ResponsiveContainer>

    </div>
  )
}

export default SalesChart