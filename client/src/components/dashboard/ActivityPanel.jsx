const activities = [
  "New lead added from LinkedIn",
  "Converted Acme Corp deal",
  "Meeting scheduled with Tesla",
  "Updated pipeline status",
]

function ActivityPanel() {
  return (
    <div
      className="
        bg-white/5
        border
        border-white/10
        rounded-3xl
        p-6
      "
    >
      <h2 className="text-xl font-semibold mb-6">
        Recent Activities
      </h2>

      <div className="space-y-4">

        {activities.map((activity, index) => (
          <div
            key={index}
            className="
              bg-white/5
              p-4
              rounded-2xl
              text-sm
              text-gray-300
            "
          >
            {activity}
          </div>
        ))}

      </div>
    </div>
  )
}

export default ActivityPanel