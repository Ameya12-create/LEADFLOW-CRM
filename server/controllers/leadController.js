import Lead from "../models/Lead.js"

export const getLeads = async (req, res) => {
  try {

    const leads = await Lead.find({
      createdBy: req.user._id,
    })

    res.json(leads)

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }
}

export const createLead = async (req, res) => {
  try {

    const {
      name,
      email,
      company,
      notes,
    } = req.body

    let priority = "Low"

    if (
      email.includes("@gmail") ||
      email.includes("@yahoo")
    ) {
      priority = "Low"
    }

    if (
      company.toLowerCase().includes("tech") ||
      company.toLowerCase().includes("microsoft") ||
      company.toLowerCase().includes("tesla")
    ) {
      priority = "High"
    }

    const lead = await Lead.create({
      name,
      email,
      company,
      notes,
      priority,
      createdBy: req.user._id,
    })

    res.status(201).json(lead)

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }
}

export const deleteLead = async (req, res) => {
  try {

    const lead = await Lead.findById(req.params.id)

    if (!lead) {
      return res.status(404).json({
        message: "Lead not found",
      })
    }

    await lead.deleteOne()

    res.json({
      message: "Lead deleted",
    })

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })

  }
}