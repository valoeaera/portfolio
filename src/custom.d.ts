declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

export interface View {
  title: string;
  url: string;
  component: ReactElement;
}

export interface JobTitle {
  title: string;
  start: string;
  end: string;
}

export interface Experience {
  company: string;
  start: string;
  end: string;
  jobTitles: Array<JobTitle>;
  skills: Array<string>;
  responsibilities: Array<string>;
}