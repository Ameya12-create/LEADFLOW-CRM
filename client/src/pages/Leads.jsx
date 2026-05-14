import {
  useEffect,
  useState,
} from "react"

import MainLayout from "../layouts/MainLayout"

import LeadTable from "../components/leads/LeadTable"

import AddLeadModal from "../components/leads/AddLeadModal"

import API from "../api/axios"

function Leads() {

  const [leads, setLeads] = useState([])

  const [showModal, setShowModal] = useState(false)

  const [search, setSearch] = useState("")

  const [loading, setLoading] = useState(true)

  const fetchLeads = async () => {

    try {

      setLoading(true)

      const { data } = await API.get("/leads")

      setLeads(data)

      setLoading(false)

    } catch (error) {

      console.log(error)

      setLoading(false)
    }
  }

  const deleteLead = async (id) => {

    try {

      await API.delete(`/leads/${id}`)

      fetchLeads()

    } catch (error) {

      console.log(error)
    }
  }

  useEffect(() => {

    const loadLeads = async () => {
      await fetchLeads()
    }

    loadLeads()

  }, [])

  const filteredLeads = leads.filter((lead) =>
    lead.name.toLowerCase().includes(search.toLowerCase()) ||

    lead.company.toLowerCase().includes(search.toLowerCase()) ||

    lead.email.toLowerCase().includes(search.toLowerCase())
  )

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
          Lead Management
        </h1>

        <p className="text-gray-400 mt-2">
          Manage and organize customer leads.
        </p>

      </div>

      <div className="mb-6">

        <input
          type="text"
          placeholder="Search leads..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
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

      </div>

      {loading ? (

        <div className="
          text-center
          py-20
          text-gray-400
        ">
          Loading leads...
        </div>

      ) : (

        <LeadTable
          leads={filteredLeads}
          openModal={() => setShowModal(true)}
          deleteLead={deleteLead}
        />

      )}

      {showModal && (

        <AddLeadModal
          closeModal={() =>
            setShowModal(false)
          }
          fetchLeads={fetchLeads}
        />

      )}

    </MainLayout>
  )
}

export default Leads