import { Trash2 } from "lucide-react"

function getStatusColor(status) {
  switch (status) {

    case "Converted":
      return "bg-green-500/20 text-green-400"

    case "Contacted":
      return "bg-yellow-500/20 text-yellow-400"

    default:
      return "bg-blue-500/20 text-blue-400"
  }
}

function getPriorityColor(priority) {
  switch (priority) {

    case "High":
      return "text-red-400"

    case "Medium":
      return "text-yellow-400"

    default:
      return "text-green-400"
  }
}

function LeadTable({
  leads,
  openModal,
  deleteLead,
}) {

  return (
    <div
      className="
        bg-white/5
        border
        border-white/10
        rounded-3xl
        overflow-hidden
        backdrop-blur-xl
      "
    >

      <div className="
        p-6
        border-b
        border-white/10
        flex
        items-center
        justify-between
      ">

        <div>

          <h2 className="text-2xl font-bold">
            Leads
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Manage customer leads
          </p>

        </div>

        <button
          onClick={openModal}
          className="
            px-5
            py-3
            rounded-2xl
            bg-gradient-to-r
            from-indigo-500
            to-purple-600
            hover:scale-105
            transition-all
          "
        >
          + Add Lead
        </button>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-white/5">

            <tr className="text-left text-gray-400 text-sm">

              <th className="p-5">Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {leads.map((lead) => (
              <tr
                key={lead._id}
                className="
                  border-t
                  border-white/5
                  hover:bg-white/5
                "
              >

                <td className="p-5 font-medium">
                  {lead.name}
                </td>

                <td className="text-gray-300">
                  {lead.email}
                </td>

                <td>
                  {lead.company}
                </td>

                <td>

                  <span
                    className={`
                      px-4
                      py-2
                      rounded-full
                      text-xs
                      font-medium
                      ${getStatusColor(lead.status)}
                    `}
                  >
                    {lead.status}
                  </span>

                </td>

                <td
                  className={`
                    font-semibold
                    ${getPriorityColor(lead.priority)}
                  `}
                >
                  {lead.priority}
                </td>

                <td>

                  <button
                    onClick={() => deleteLead(lead._id)}
                    className="
                      text-red-400
                      hover:text-red-300
                    "
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}

export default LeadTable