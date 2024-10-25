import React from "react";

const AddTask = (props: any) => {
  return (
    <div className="display-flex flex-column gap-15">
      <input type="text" placeholder="Task Title" />
      <input type="text" placeholder="Task Description" />
      <input type="date" placeholder="Date Picker" />
      <button type="button">Add Task</button>
    </div>
  );
};

export default AddTask;
