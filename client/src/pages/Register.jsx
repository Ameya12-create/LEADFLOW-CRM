import { useState, useContext } from "react"

import { motion } from "framer-motion"

import { Link, useNavigate } from "react-router-dom"

import API from "../api/axios"

import { AuthContext } from "../context/AuthContextProvider"

function Register() {

  const navigate = useNavigate()

  const { login } = useContext(AuthContext)

  const [formData, setFormData] = useState({
    name: "",
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
        "/auth/register",
        formData
      )

      login(data)

      navigate("/")

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Registration failed"
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
      px-6
    ">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          w-full
          max-w-md
          bg-white/5
          border
          border-white/10
          rounded-3xl
          p-8
          backdrop-blur-xl
        "
      >

        <h1 className="
          text-4xl
          font-bold
          text-center
          mb-8
        ">
          Register
        </h1>

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
            type="password"
            name="password"
            placeholder="Password"
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
            type="submit"
            className="
              w-full
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-indigo-500
              to-purple-600
            "
          >
            Create Account
          </button>

        </form>

        <p className="text-center mt-6">

          Already have an account?

          <Link
            to="/login"
            className="text-indigo-400 ml-2"
          >
            Login
          </Link>

        </p>

      </motion.div>

    </div>
  )
}

export default Register