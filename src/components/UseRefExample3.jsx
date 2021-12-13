import { useState } from 'react';
import { Todo } from '.';

const UseRefExample3 = () => {
  const [showTodo, setShowTodo] = useState(true);

  return (
    <div>
      {showTodo && <Todo />}
      <button
        type="buttton"
        className="btn btn-primary"
        onClick={() => setShowTodo(!showTodo)}
      >
        Toggle Todo
      </button>
    </div>
  );
};

export default UseRefExample3;
