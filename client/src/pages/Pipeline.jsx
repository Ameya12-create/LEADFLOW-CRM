import MainLayout from "../layouts/MainLayout"
import PipelineColumn from "../components/pipeline/PipelineColumn"

const newLeads = [
  {
    name: "John Carter",
    company: "Tesla",
    email: "john@tesla.com",
    priority: "High",
  },

  {
    name: "Sarah Smith",
    company: "Freelance",
    email: "sarah@gmail.com",
    priority: "Low",
  },
]

const contactedLeads = [
  {
    name: "Michael Lee",
    company: "Microsoft",
    email: "microsoft@gmail.com",
    priority: "Medium",
  },
]

const convertedLeads = [
  {
    name: "Emma Watson",
    company: "Stripe",
    email: "emma@stripe.com",
    priority: "High",
  },
]

function Pipeline() {
  return (
    <MainLayout>

      <div className="mb-8">

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
          Lead Pipeline
        </h1>

        <p className="text-gray-400 mt-2">
          Track leads across different sales stages.
        </p>

      </div>

      <div className="
        grid
        grid-cols-1
        lg:grid-cols-3
        gap-6
      ">

        <PipelineColumn
          title="New Leads"
          leads={newLeads}
          color="bg-blue-500/20 text-blue-400"
        />

        <PipelineColumn
          title="Contacted"
          leads={contactedLeads}
          color="bg-yellow-500/20 text-yellow-400"
        />

        <PipelineColumn
          title="Converted"
          leads={convertedLeads}
          color="bg-green-500/20 text-green-400"
        />

      </div>

    </MainLayout>
  )
}

export default Pipeline