import "./App.css";
import JobCard from "./components/JobCard";

function App() {
  const experiences = [
    {
      company: "Auto-Owners Insurance",
      start: "Nov 2023",
      end: "Current",
      skills: ["Groovy", "Java", "Git", "Gradle"],
      responsibilities: [
        "Built groovy integrations which connected various applications, including online and automatic forms",
        "Utilized JAXB to generate Java classes for marshaling and un-marshaling XML",
        "Coordinated with other technical teams in order to ensure business requirements are met",
        "Used gradle catalogs to manage a plethora of independently-versioned dependencies",
      ],
    },
    {
      company: "Kinney Group, Inc.",
      start: "May 2022",
      end: "Nov 2023",
      skills: [
        "Groovy", "Scrum/Agile",
        "AWS", "Front-end Development",
        "Version Control", "React",
        "CI/CD", "JavaScript",
        "MongoDB", "TypeScript",
        "CSS", "Git", "HTML",
      ],
      responsibilities: [
        "Integrated with Agile development team, including code review of others’ work",
        "Built and modified Splunk dashboards in both Simple XML & JavaScript",
        "Maintained and improved upon existing Node JS & MongoDB backend projects",
        "Managed software release process and versioning",
        "Automated and maintained shared development environments in AWS using Jenkins and Kubernetes",
        "Transitioned product documentation to Docusaurus",
        "Explored automated testing with the Jest and Cypress Testing frameworks",
        "Utilized Git to facilitate collaboration and version control",
      ]
    },
  ];
  return (
    <>
      <h2 id="introduction">Hiya! I'm Valerie!</h2>
      <p id="introduction-text">
        Thanks for checking out my portfolio. I do a lot of different things in
        the programming sphere. I have a Bachelor's Degree in Computer Science,
        where I focused on networking and cybersecurity. I have a passion for
        web development and build apps using React in my spare time, but I also
        enjoy backend development and DevOps tasks. Professionally, I develop
        Groovy applications for a large insurance company in Grand Rapids.
      </p>
      <h2 id="cv-header">Professional Experience</h2>
      <div id="cv-container">
        {experiences.map((experience) => (
          <JobCard {...experience} />
        ))}
      </div>
    </>
  );
}

export default App;
