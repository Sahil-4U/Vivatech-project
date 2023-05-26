import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';
// import { CSVLink, CSVDownload } from 'react-csv';

const ExcelExportButton = () => {
  const { tasks, taskList } = useContext(TaskContext);

  const handleClick = () => {
    // Logic for handling the click event
    alert('sorry i am kept working on export data in excel ')
  };

  return (
    // <CSVLink data={tasks} filename={"tasks.csv"} target="_blank">
      <button
      onClick={handleClick}
      >Export file in excel</button>
    // </CSVLink>
  );
};

export default ExcelExportButton;







