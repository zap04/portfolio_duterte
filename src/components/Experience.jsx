import React from "react"

function Experience() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">Technical Experience</h3>
          <p className="text-[#A2AF9B]">Cebu Institute of Technology - University</p>
          <p className="text-sm text-[#A2AF9B]">08/2021 to 05/2026</p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Built and managed Windows Server Domain Controller with full Active Directory environment.</li>
            <li>Provisioned user accounts, structured OUs, and deployed GPOs for security and software restrictions.</li>
            <li>Configured secure network file shares with proper CRUD permissions.</li>
            <li>Set up and tested virtual client-server environments (Server 2016 & Windows 10/11).</li>
            <li>Documented differences and security implications of Domains vs Workgroups.</li>
            <li>Executed OS preparation, hostname conventions, and domain joins for all devices.</li>
            <li>Designed AWS cloud architectures following best practices for high availability and fault tolerance.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience