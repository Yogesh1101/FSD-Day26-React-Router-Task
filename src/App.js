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
      "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Selenium-Interview-Questions-and-Answers.webp",
    title: "8 Different Types of Cybersecurity and Threats Involved",
    description:
      "Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization.",
    date: "9 November 2022",
    comments: "No Comments",
  },
  {
    type: "cyberSecurity",
    image: "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Selenium-Interview-Questions-and-Answers.webp",
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
