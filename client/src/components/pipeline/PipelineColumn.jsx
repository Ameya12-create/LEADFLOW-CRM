function PipelineColumn({ title, leads, color }) {
  return (
    <div
      className="
        bg-white/5
        border
        border-white/10
        rounded-3xl
        p-5
        backdrop-blur-xl
        min-h-[600px]
      "
    >

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-xl font-bold">
          {title}
        </h2>

        <div
          className={`
            px-3
            py-1
            rounded-full
            text-xs
            font-semibold
            ${color}
          `}
        >
          {leads.length}
        </div>

      </div>

      <div className="space-y-4">

        {leads.map((lead, index) => (
          <div
            key={index}
            className="
              bg-[#111827]
              border
              border-white/10
              rounded-2xl
              p-5
              hover:scale-[1.02]
              transition-all
              cursor-pointer
            "
          >

            <div className="flex items-center justify-between">

              <div>
                <h3 className="font-semibold text-lg">
                  {lead.name}
                </h3>

                <p className="text-sm text-gray-400 mt-1">
                  {lead.company}
                </p>
              </div>

              <div className="
                w-12
                h-12
                rounded-2xl
                bg-gradient-to-r
                from-indigo-500
                to-purple-600
                flex
                items-center
                justify-center
                font-bold
              ">
                {lead.name[0]}
              </div>

            </div>

            <div className="mt-5 flex items-center justify-between">

              <span className="
                text-xs
                px-3
                py-2
                rounded-full
                bg-white/5
                text-gray-300
              ">
                {lead.email}
              </span>

              <span
                className={`
                  text-xs
                  font-semibold
                  ${
                    lead.priority === "High"
                      ? "text-red-400"
                      : lead.priority === "Medium"
                      ? "text-yellow-400"
                      : "text-green-400"
                  }
                `}
              >
                {lead.priority}
              </span>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default PipelineColumn