import { JobCard } from "../../components";
import { experiences } from "./experiences-data";

const Resume = () => {
  return (
    <>
      <h2 id="cv-header">Professional Experience</h2>
      <div id="cv-container">
        {experiences.map((experience) => (
          <JobCard {...experience} />
        ))}
      </div>
    </>
  );
};

export default Resume;
