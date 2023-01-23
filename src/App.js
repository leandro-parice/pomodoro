import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { useState } from "react";

import "./App.css";

import InputJob from "./components/InputJob";
import JobsList from "./components/JobsList";
import Timer from "./components/Timer";

function App() {
  const [jobs, setJobs] = useState(["teste 1", "teste 2"]);

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  return (
    <div className="App">
      <InputJob handleJob={addJob} />
      <JobsList jobs={jobs} />
      <Timer />
    </div>
  );
}

export default App;
