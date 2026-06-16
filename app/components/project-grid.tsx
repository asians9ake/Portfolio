"use client"

import Link from "next/link"
import { title } from "process"
import { useState, useEffect } from "react"
import { FaGithub, FaMedium, FaTable } from "react-icons/fa"

const projects = [
  {
    id: 1,
    title: "AgroPredict - Crop Recommendation System",
    description:
      "Machine Learning based crop recommendation system that predicts the most suitable crop using soil and environmental parameters with high accuracy.",
    image: "/agropredict.png",
    link: "https://github.com/asians9ake/AgroPredict",
    type: "github",
    category: ["all", "machine-learning", "featured"],
    skills: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Data Preprocessing",
      "Feature Engineering",
      "Crop Recommendation",
      "Predictive Analytics",
      "Model Evaluation"
    ],
  },

  {
    id: 2,
    title: "Bewakoof & Zepto Sales Analytics",
    description:
      "Business analytics project focused on sales performance, customer behavior, inventory trends, and business insights using real-world retail datasets.",
    image: "/sales-analytics.png",
    link: "https://github.com/asians9ake/Bewakoof-Zepto-Sales-Analytics",
    type: "github",
    category: ["all", "business-analytics", "featured"],
    skills: [
      "Excel",
      "SQL",
      "Business Analytics",
      "Sales Analysis",
      "Customer Insights",
      "Inventory Analysis",
      "Data Visualization"
    ],
  },

  {
    id: 3,
    title: "CheckIn-CheckUp - Hospital Admissions Analytics",
    description:
      "Analyzed 54,966 hospital admission records to uncover trends in patient demographics, medical conditions, billing patterns, insurance providers, and length of stay. Built an interactive analytics dashboard to support data-driven healthcare insights.",
    image: "/checkin-checkup.png",
    link: "https://github.com/asians9ake/CheckIn-CheckUp",
    type: "github",
    category: ["all", "data-analysis", "featured"],
    skills: [
      "Excel",
      "Healthcare Analytics",
      "Dashboard Design",
      "Data Cleaning",
      "Data Visualization",
      "Statistical Analysis",
      "Business Intelligence",
      "Reporting"
    ],
  },

  {
    id: 4,
    title: "ATM Data Management System",
    description:
      "Built a console-based ATM Management System in C++ using Object-Oriented Programming concepts, file handling, and data persistence for account management operations.",
    image: "/atm-system.png",
    link: "https://github.com/asians9ake/ATM_Data_Management",
    type: "github",
    category: ["all", "featured"],
    skills: [
      "C++",
      "Object-Oriented Programming",
      "File Handling",
      "Data Persistence",
      "Classes & Objects",
      "Inheritance",
      "Encapsulation",
      "Problem Solving"
    ],
  },

  {
    id: 5,
    title: "Spam Mail Detection System",
    description:
      "Built a machine learning model to classify emails as spam or legitimate using Natural Language Processing and text feature extraction techniques.",
    image: "/spam-mail.png",
    link: "https://github.com/asians9ake",
    type: "github",
    category: ["all", "machine-learning", "featured"],
    skills: [
      "Python",
      "NLP",
      "Machine Learning",
      "Scikit-learn",
      "Text Processing",
      "TF-IDF",
      "Classification",
      "Model Evaluation"
    ],
  },

  {
    id: 6,
    title: "Predicting Campus Placement",
    description:
      "Built a Machine Learning model to predict student placement outcomes based on academic performance, skills, and other key factors.",
    image: "/campus-placement.png",
    link: "https://github.com/asians9ake/Predicting-Campus-Placement",
    type: "github",
    category: ["all", "machine-learning", "featured"],
    skills: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Classification",
      "Data Preprocessing",
      "Feature Engineering",
      "Predictive Analytics",
      "Model Evaluation"
    ],
  },

  {
    id: 7,
    title: "Customer Churn Prediction using ANN",
    description:
      "Built an Artificial Neural Network (ANN) model to predict customer churn and identify customers likely to leave, helping businesses improve retention strategies.",
    image: "/customer-churn.png",
    link: "https://github.com/asians9ake/Customer_churn_ANN",
    type: "github",
    category: ["all", "machine-learning", "featured"],
    skills: [
      "Python",
      "TensorFlow",
      "Keras",
      "Artificial Neural Networks",
      "Customer Analytics",
      "Predictive Modeling",
      "Data Preprocessing",
      "Model Evaluation"
    ],
  }
]

interface ProjectGridProps {
  activeCategory?: string
}

export function ProjectGrid({ activeCategory = "all" }: ProjectGridProps) {
  const [filteredProjects, setFilteredProjects] = useState(projects)

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category.includes(activeCategory))
      )
    }
  }, [activeCategory])

  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 p-5"
          >
            {/* Image Section */}
            <div className=" rounded-xl flex justify-center h-60 mb-6 overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-3 group-hover:text-black transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-6">
              {project.description ||
                "Explore this project to see the implementation and results."}
            </p>

            {/* Skills Section */}
            {project.skills && project.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
            {project.skills.map((skill) => (
             <span
             key={skill}
            className="text-xs font-medium bg-gray-100 border border-gray-200 text-gray-700 px-3 py-1 rounded-full"
            >
            {skill}
            </span>
            ))}
            </div>
            )}

            {/* Footer with Arrow */}
            <div className="flex justify-end mt-auto pr-6 pb-2">
              <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center text-black text-2xl font-semibold group-hover:bg-black group-hover:text-white transition-all duration-300">
                →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
