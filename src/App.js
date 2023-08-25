import { NavLink, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { All } from "./Components/All";
import { FullStack } from "./Components/FullStack";
import { DataScience } from "./Components/DataScience";
import { CyberSecurity } from "./Components/CyberSecurity";
import { Careers } from "./Components/Careers";

// It containes all the Course Details
const Coures_Details = [
  {
    type: "all",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Selenium-Interview-Questions-and-Answers.webp",
    title: "Top Selenium Interview Questions and Answers for 2023",
    description:
      "Testing is a very important phase in the software development lifecycle (SDLC) and thus, Selenium.",
    date: "24 August 2023",
    comments: "No Comments",
  },
  {
    type: "all",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Git-Interview-Questions-and-Answers.webp",
    title: "Top Git Interview Questions and Answers For 2023",
    description:
      "What is the basic required skill for any software developer job? Programming language? Yes.",
    date: "24 August 2023",
    comments: "No Comments",
  },
  {
    type: "all",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Jira-Interview-Questions-and-Answers.webp",
    title: "Top 45 JIRA Interview Questions and Answers (2023)",
    description:
      "The most tedious task in any organization is project management and that is JIRA.",
    date: "23 August 2023",
    comments: "No Comments",
  },
  {
    type: "fullStack",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Selenium-Interview-Questions-and-Answers.webp",
    title: "The Top 10 Tools Every Full Stack Developer Should Master in 2023.",
    description:
      "As a full stack developer, having the right set of tools is crucial for your.",
    date: "5 August 2023",
    comments: "No Comments",
  },
  {
    type: "fullStack",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Selenium-Interview-Questions-and-Answers.webp",
    title: "The Ultimate Guide to Real-World Full Stack Development",
    description:
      "Full stack development has become increasingly popular in recent years, with companies seeking professionals.",
    date: "5 August 2023",
    comments: "No Comments",
  },
  {
    type: "fullStack",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development-2048x1072.webp",
    title: "Best Ways to Learn Full Stack Development in 2023",
    description:
      "Full stack development is and will be a promising and an in-demand career.",
    date: "4 August 2023",
    comments: "No Comments",
  },
  {
    type: "dataScience",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Best-Data-Science-Online-Courses-for-Beginners.webp",
    title: "10 Best Data Science Online Courses for Beginners | 2023",
    description:
      "In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most popular technology.",
    date: "14 August 2023",
    comments: "No Comments",
  },
  {
    type: "dataScience",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/08/data-science-webinars-and-workshops-2048x1072.webp",
    title: "Data Science Webinars and Workshops",
    description:
      "In today’s world, it’s becoming increasingly important to be knowledgeable in the field of data.",
    date: "9 August 2023",
    comments: "No Comments",
  },
  {
    type: "dataScience",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/07/best-data-science-frameworks.webp",
    title: "10 Best Data Science Frameworks in 2023",
    description:
      "Does data scientists fascinate you? If yes, you must definitely know about data science frameworks.",
    date: "5 August 2023",
    comments: "No Comments",
  },
  {
    type: "cyberSecurity",
    image:
      "data:image/png;base64,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",
    title: "8 Different Types of Cybersecurity and Threats Involved",
    description:
      "Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization.",
    date: "9 November 2022",
    comments: "No Comments",
  },
  {
    type: "cyberSecurity",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Selenium-Interview-Questions-and-Answers.webp",
    title: "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
    description:
      "There is something fascinating about a lone hacker in black hoodies using a single system.",
    date: "1 March 2021",
    comments: "No Comments",
  },
  {
    type: "cyberSecurity",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Selenium-Interview-Questions-and-Answers.webp",
    title: "Cybersecurity Jobs: Ultimate Cybersecurity Career Roadmap",
    description:
      "According to the job statistics of 2020, cybersecurity jobs were among the top 15 emerging",
    date: "1 March 2021",
    comments: "No Comments",
  },
  {
    type: "careers",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-How-long-it-would-take-to-learn-Motion-Graphics.webp",
    title: "How Long Would it Take to Learn Motion Graphics?",
    description:
      "Motion graphics is like creating moving pictures with design and animation.",
    date: "20 August 2023",
    comments: "No Comments",
  },
  {
    type: "careers",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-How-to-Become-a-Motion-Graphics-Designer.webp",
    title: "How to Become a Motion Graphics Designer – Complete Career Roadmap",
    description:
      "Imagine if pictures could come to life, telling stories and conveying messages with movement.",
    date: "20 August 2023",
    comments: "No Comments",
  },
  {
    type: "careers",
    image:
      "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Skills-Required-to-Become-a-Digital-Marketer.webp",
    title: "Top Skills Required to Become a Digital Marketer",
    description:
      "Digital marketing is one of the most dynamic industries that has transformed how businesses connect.",
    date: "16 August 2023",
    comments: "No Comments",
  },
];

// This the Main App Component
function App() {
  // menu is set to show or disable the menu in small screen
  const [menu, setMenu] = useState(false);
  const course = Coures_Details;
  return (
    <div className="App">
      {/* The nav contains all the required details like link names, menu icon and a title */}
      <nav>
        <h1 className="title">Category</h1>
        <div
          className="menu"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <hr></hr>
        <ul className={menu ? "open" : ""}>
          <li>
            <NavLink to="/">ALL</NavLink>
          </li>
          <li>
            <NavLink to="/full-stack-development">
              FULL STACK DEVELOPMENT
            </NavLink>
          </li>
          <li>
            <NavLink to="/data-science">DATA SCIENCE</NavLink>
          </li>
          <li>
            <NavLink to="/cyber-security">CYBER SECURITY</NavLink>
          </li>
          <li>
            <NavLink to="/careers">CAREERS</NavLink>
          </li>
          <hr className="w-75"></hr>
        </ul>
      </nav>
      {/* This container is used to display the diff. types of pages loading using router */}
      {/* All components all called when the link is clicked */}
      <div className="container main-container">
        <Routes>
          <Route path="/" element={<All details={course} />} />
          <Route
            path="/full-stack-development"
            element={<FullStack details={course} />}
          />
          <Route
            path="/data-science"
            element={<DataScience details={course} />}
          />
          <Route
            path="/cyber-security"
            element={<CyberSecurity details={course} />}
          />
          <Route path="/careers" element={<Careers details={course} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
