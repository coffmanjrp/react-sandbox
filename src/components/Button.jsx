import React, { memo } from 'react';

const Button = memo(({ addTask }) => {
  console.log('Button rendered');

  return (
    <div>
      <button className="btn btn-primary" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
});

export default Button;
