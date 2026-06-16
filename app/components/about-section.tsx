import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="bg-white pb-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left - Image */}
          <div className="flex justify-center lg:justify-start lg:order-1 order-2">
            <Image
              src="/ashutosh.jpeg"
              alt="Ashutosh Singhania"
              width={500}
              height={500}
              className="rounded-lg shadow-md w-full max-w-sm h-auto object-cover"
            />
          </div>

          {/* Right - Text */}
          <div className="self-center lg:order-2 order-1">
            <h2 className="text-5xl font-normal text-gray-900 mb-6">
              A bit on me
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
             I'm an AI & Data Science graduate (8.38 CGPA) passionate about Data Science,
              Machine Learning, Business Analytics, and Generative AI. I enjoy turning complex data 
              into insights, predictive models, and AI-driven solutions that solve real-world problems.

            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/asians9ake"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 rounded-lg text-sm font-medium transition-colors"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/ashutosh-singhania-327648214/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 rounded-lg text-sm font-medium transition-colors"
              >
                LinkedIn
              </a> 
              <a
                href="https://medium.com/@ashutoshsinghania1722"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 rounded-lg text-sm font-medium transition-colors"
              >
               Medium
              </a>
              <a
                href="/Ashutosh_Singhania_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 rounded-lg text-sm font-medium transition-colors"
              >
                Resume
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}