import React from "react"

function Education() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Education</h2>
      <div>
        <h3 className="text-xl font-semibold">Bachelor of Science in Information Technology</h3>
        <p className="text-[#A2AF9B]">Cebu Institute of Technology - University</p>
        <p className="text-sm text-[#A2AF9B]">01/2021 to 01/2026</p>
        <p className="mt-2">Focus Areas:</p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>Enterprise Infrastructure & Active Directory</li>
          <li>Cloud Architecture & AWS Services</li>
          <li>Network Configuration & Management</li>
        </ul>
      </div>
    </section>
  )
}

export default Education