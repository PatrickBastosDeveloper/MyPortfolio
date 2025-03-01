import React from "react";
import AboutImage from "../assets/aboutme-image.png";
import resumePDF from "../assets/resume.pdf"; // Certifique-se de que o caminho está correto

const About = () => {
  return (
    <div className="text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0 border-4 border-white transform 
          transition-transform duration-300 hover:scale-105"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a back-end software developer with experience in C# and .NET, specializing in building scalable and efficient solutions.<br /> <br />
              Holding a postgraduate degree in Systems Development, I have a strong focus on performance, security, and best coding practices.<br /><br />
              I am driven by challenges and always seeking new technologies and continuous improvement to deliver robust and high-impact solutions.<br /><br />
              🚀 Main technologies: C#, .NET, REST APIs, SQL Server, Azure, Microservices Architecture.<br />
              📌 Interests: Software Engineering, System Performance, Cloud Computing, DevOps.
            </p>
            <div className="mt-12 flex flex-col md:flex-row items-center text-center md:text-left">
              <div className="md:mr-12 flex flex-col items-center md:items-start">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-50 to-blue-400">
                  2+
                </h3>
                <p>Years Experience</p>
              </div>
            </div>
            <div className="mt-12 flex flex-col items-center md:items-start" style={{ marginLeft: "0%" }}>
              <h3 className="text-2xl font-bold mb-4">Download My Resume</h3>
              <div className="flex space-x-4">
                <a
                  href={resumePDF}
                  download="Patrick_Bastos_Resume.pdf"
                  className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-500"
                >
                  Download
                </a>
                <a
                  href={resumePDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500"
                >
                  Open in New Tab
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;