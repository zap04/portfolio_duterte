import React from "react"

function Contact() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-lg mb-4">
        I'm always open to new opportunities and collaborations in IT Support, Cloud Architecture, and Enterprise
        Infrastructure. Feel free to reach out!
      </p>
      <div className="space-y-4">
        <div className="bg-[#1A1A1A] p-4 rounded-lg shadow-md">
          <p className="font-semibold">Email</p>
          <a href="mailto:terence.duterte@gmail.com" className="text-[#A2AF9B]">
            terence.duterte@gmail.com
          </a>
        </div>
        <div className="bg-[#1A1A1A] p-4 rounded-lg shadow-md">
          <p className="font-semibold">Phone</p>
          <a href="tel:+639171999755" className="text-[#A2AF9B]">
            +63 917 199 9755
          </a>
        </div>
        <div className="bg-[#1A1A1A] p-4 rounded-lg shadow-md">
          <p className="font-semibold">Location</p>
          <p className="text-[#A2AF9B]">Brgy. Pitalo San Fernando, Cebu, Philippines 6018</p>
        </div>
        <div className="bg-[#1A1A1A] p-4 rounded-lg shadow-md">
          <p className="font-semibold">GitHub</p>
          <a href="https://github.com/zap04" target="_blank" rel="noopener noreferrer" className="text-[#A2AF9B]">
            https://github.com/zap04
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact