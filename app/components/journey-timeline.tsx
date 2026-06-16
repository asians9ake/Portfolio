"use client"

export function JourneyTimeline() {
  const currentActivities = [
    {
      title: "Business Analyst Intern",
      description:
        "Working on sales analytics, inventory optimization, and business reporting using SQL, Excel, and Power BI."
    },
    {
      title: "Building Data Projects",
      description:
        "Developing machine learning and analytics projects to solve real-world business problems and strengthen my portfolio."
    },
    {
      title: "Learning & Upskilling",
      description:
        "Continuously improving SQL, Python, Power BI, Tableau, and Machine Learning through hands-on projects and case studies."
    },
    {
      title: "Open to Opportunities",
      description:
        "Actively seeking Data Analyst, Business Analyst, and AI-related roles where I can contribute through data-driven decision making."
    }
  ]

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
            What I'm Upto & Into
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentActivities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                {activity.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}