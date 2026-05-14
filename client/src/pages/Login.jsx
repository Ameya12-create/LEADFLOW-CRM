import { useState, useContext } from "react"

import { motion } from "framer-motion"

import { Link, useNavigate } from "react-router-dom"

import API from "../api/axios"

import { AuthContext } from "../context/AuthContextProvider"

function Login() {

  const navigate = useNavigate()

  const { login } = useContext(AuthContext)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

      const { data } = await API.post(
        "/auth/login",
        formData
      )

      login(data)

      navigate("/")

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Login failed"
      )

    }
  }

  return (
    <div className="
      min-h-screen
      bg-[#020617]
      flex
      items-center
      justify-center
      relative
      overflow-hidden
      px-6
    ">

      <div className="
        absolute
        top-0
        left-0
        w-[400px]
        h-[400px]
        bg-purple-500/20
        blur-[120px]
        rounded-full
      " />

      <div className="
        absolute
        bottom-0
        right-0
        w-[400px]
        h-[400px]
        bg-cyan-500/20
        blur-[120px]
        rounded-full
      " />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          relative
          z-10
          w-full
          max-w-md
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          rounded-3xl
          p-8
          shadow-2xl
        "
      >

        <div className="mb-8 text-center">

          <h1 className="
            text-4xl
            font-extrabold
            bg-gradient-to-r
            from-indigo-400
            to-purple-500
            bg-clip-text
            text-transparent
          ">
            LeadFlow CRM
          </h1>

          <p className="text-gray-400 mt-3">
            Welcome back
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
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
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
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

          <button
            className="
              w-full
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-indigo-500
              to-purple-600
              font-semibold
            "
          >
            Sign In
          </button>

        </form>

        <p className="text-center text-gray-400 mt-6">

          Don't have an account?

          <Link
            to="/register"
            className="text-indigo-400 ml-2"
          >
            Register
          </Link>

        </p>

      </motion.div>

    </div>
  )
}

export default Login