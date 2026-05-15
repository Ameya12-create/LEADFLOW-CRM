import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

import authRoutes from "./routes/authRoutes.js"
import leadRoutes from "./routes/leadRoutes.js"

dotenv.config()

const app = express()

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://leadflow-crm-xi-bice.vercel.app",
    ],
    credentials: true,
  })
)

app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/leads", leadRoutes)

app.get("/", (req, res) => {
  res.send("LeadFlow CRM API Running")
})

const PORT = process.env.PORT || 5000

const startServer = async () => {

  try {

    await mongoose.connect(
      process.env.MONGO_URI
    )

    console.log("MongoDB Connected")

    app.listen(PORT, () => {
      console.log(
        `Server running on port ${PORT}`
      )
    })

  } catch (error) {

    console.log(error)

  }
}

startServer()