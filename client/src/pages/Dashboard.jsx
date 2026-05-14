import MainLayout from "../layouts/MainLayout"

import StatCard from "../components/dashboard/StatCard"
import SalesChart from "../components/dashboard/SalesChart"
import ActivityPanel from "../components/dashboard/ActivityPanel"

import {
  Users,
  CheckCircle,
  Clock,
  DollarSign,
} from "lucide-react"

function Dashboard() {
  return (
    <MainLayout>

      <div className="mb-10">

        <h1
          className="
            text-4xl
            font-bold
            bg-gradient-to-r
            from-indigo-400
            to-purple-500
            bg-clip-text
            text-transparent
          "
        >
          Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Monitor leads, conversions and sales analytics.
        </p>

      </div>

      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
        mb-8
      ">

        <StatCard
          title="Total Leads"
          value="1,248"
          icon={Users}
          color="bg-indigo-500"
        />

        <StatCard
          title="Converted"
          value="326"
          icon={CheckCircle}
          color="bg-green-500"
        />

        <StatCard
          title="Pending"
          value="918"
          icon={Clock}
          color="bg-yellow-500"
        />

        <StatCard
          title="Revenue"
          value="$48K"
          icon={DollarSign}
          color="bg-purple-500"
        />

      </div>

      <div className="
        grid
        grid-cols-1
        xl:grid-cols-3
        gap-8
      ">

        <div className="xl:col-span-2">
          <SalesChart />
        </div>

        <ActivityPanel />

      </div>

    </MainLayout>
  )
}

export default Dashboard