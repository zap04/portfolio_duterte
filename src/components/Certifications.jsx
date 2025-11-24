import React from "react"

function Certifications() {
  const certifications = [
    {
      name: "AWS Academy Graduate - Cloud Architecting",
      link: "https://www.credly.com/badges/d0cd3847-b6dd-4045-9c07-ca7692f61079/public_url",
      year: "October 21,2025",
    },
    {
      name: "AWS Academy Graduate - Cloud Foundations",
      link: "https://www.credly.com/badges/aca0bac5-b1a2-49d5-bb31-3a44a857e1a5/public_url",
      year: "September 27, 2025",
    },
    {
      name: "Introduction to TCP/IP",
      link: "https://coursera.org/share/9331d4b7816f1fc6e1d42f50d5c97a57",
      year: "November 23,2023",
    },
  ]

  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Certifications</h2>
      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-[#1A1A1A] p-4 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">{cert.name}</h3>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-[#A2AF9B]">
                Training Badge
              </a>
            </div>
            <span className="text-sm text-[#A2AF9B]">{cert.year}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications