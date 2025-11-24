import React from "react"

function Skills() {
  const skillCategories = [
    {
      title: "Infrastructure",
      skills: ["Active Directory Management", "Windows Server Administration", "Domain Controller Setup", "GPO Configuration"],
    },
    {
      title: "Cloud",
      skills: ["AWS Cloud Architecture", "IAM Management", "EC2 Instances", "S3 Storage", "VPC Configuration"],
    },
    {
      title: "Networking",
      skills: ["Network Configuration", "TCP/IP", "File Share Management", "Security Compliance"],
    },
    {
      title: "Virtualization",
      skills: ["Virtual Environment Setup", "Hyper-V", "Client-Server Architecture", "OS Deployment"],
    },
  ]

  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-[#1A1A1A] p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#A2AF9B] mb-2">{category.title}</h3>
            <ul className="list-disc list-inside space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills