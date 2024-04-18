import styles from "./JobCard.module.css"

interface Props {
  company: string;
  start: string;
  end: string;
  skills: Array<string>;
  responsibilities: Array<string>;
}

const JobCard = (props: Props) => {
  return (
    <div id="job-card-container" className={styles["job-card"]}>
      <p>{props.company}</p>
      <p>
        {props.start} - {props.end}
      </p>
      {props.skills.map((skill) => (
        <p key={skill}>{skill}</p>
      ))}
      {props.responsibilities.map((responsibility) => (
        <p key={responsibility.split(" ")[0]}>{responsibility}</p>
      ))}
    </div>
  );
};

export default JobCard;
