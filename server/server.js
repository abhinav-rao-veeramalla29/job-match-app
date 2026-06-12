const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Application = require("./models/Application");
const Job = require("./models/Job");
const User = require("./models/User");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://jobmatchuser:abhi29@jobmatchcluster.gu5aoez.mongodb.net/jobmatch?retryWrites=true&w=majority&appName=jobmatchcluster"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Home Route
app.get("/", (req, res) => {
  res.send("Job Match Backend Running");
});

// ===================== JOB ROUTES =====================

// Get All Jobs
app.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error fetching jobs",
    });
  }
});

// Add Job
app.post("/jobs", async (req, res) => {
  try {
    const job = new Job({
      title: req.body.title,
      company: req.body.company,
      location: req.body.location,
      description: req.body.description,
    });

    await job.save();

    res.json({
      message: "Job added successfully!",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error adding job",
    });
  }
});

// Update Job
app.put("/jobs/:id", async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedJob);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error updating job",
    });
  }
});

// Delete Job
app.delete("/jobs/:id", async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);

    res.json({
      message: "Job deleted successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error deleting job",
    });
  }
});

// ===================== APPLICATION ROUTES =====================

// Submit Application
app.post("/apply", async (req, res) => {
  try {
    const { name, email, jobId } = req.body;

    if (!name || !email || !jobId) {
      return res.status(400).json({
        message: "Name, email and jobId are required.",
      });
    }

    const application = new Application({
      name,
      email,
      jobId,
    });

    await application.save();

    res.json({
      message: "Application submitted successfully!",
    });
  } catch (error) {
    console.log("Apply Error:", error);

    res.status(500).json({
      message: "Error saving application",
    });
  }
});

// Get All Applications
app.get("/applications", async (req, res) => {
  try {
    const applications = await Application.find();

    res.json(applications);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error fetching applications",
    });
  }
});

// Delete Application
app.delete("/applications/:id", async (req, res) => {
  try {
    await Application.findByIdAndDelete(req.params.id);

    res.json({
      message: "Application deleted successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error deleting application",
    });
  }
});

// ===================== AUTH ROUTES =====================

// Register
app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(
      req.body.password,
      10
    );

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    await user.save();

    res.json({
      message: "User registered successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Registration failed",
    });
  }
});

// Login
app.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      "jobmatchsecret"
    );

    res.json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Login failed",
    });
  }
});

// ===================== START SERVER =====================

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
