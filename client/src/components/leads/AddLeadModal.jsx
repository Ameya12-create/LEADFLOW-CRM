import { useState } from "react"

import API from "../../api/axios"

function AddLeadModal({ closeModal, fetchLeads }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    notes: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      await API.post(
        "/leads",
        formData
      )

      fetchLeads()

      closeModal()

    } catch (error) {

      console.log(error)

    }
  }

  return (
    <div className="
      fixed
      inset-0
      bg-black/50
      flex
      items-center
      justify-center
      z-50
    ">

      <div className="
        bg-[#111827]
        border
        border-white/10
        rounded-3xl
        p-8
        w-full
        max-w-lg
      ">

        <h2 className="text-2xl font-bold mb-6">
          Add Lead
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="
              w-full
              bg-white/5
              border
              border-white/10
              rounded-2xl
              px-5
              py-4
              outline-none
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="
              w-full
              bg-white/5
              border
              border-white/10
              rounded-2xl
              px-5
              py-4
              outline-none
            "
          />

          <input
            type="text"
            name="company"
            placeholder="Company"
            onChange={handleChange}
            className="
              w-full
              bg-white/5
              border
              border-white/10
              rounded-2xl
              px-5
              py-4
              outline-none
            "
          />

          <textarea
            name="notes"
            placeholder="Notes"
            rows="4"
            onChange={handleChange}
            className="
              w-full
              bg-white/5
              border
              border-white/10
              rounded-2xl
              px-5
              py-4
              outline-none
            "
          />

          <div className="flex gap-4">

            <button
              type="submit"
              className="
                flex-1
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-indigo-500
                to-purple-600
              "
            >
              Save Lead
            </button>

            <button
              type="button"
              onClick={closeModal}
              className="
                flex-1
                py-4
                rounded-2xl
                bg-white/10
              "
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  )
}

export default AddLeadModal