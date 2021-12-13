import { useCallback, useState } from 'react';
import Button from './Button';

const UseCallbackExample = () => {
  const [tasks, setTasks] = useState([]);

  const addTack = useCallback(() => {
    setTasks((prevState) => [...prevState, 'Some Task']);
  }, [setTasks]);

  return (
    <div>
      <Button addTask={addTack} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
};

export default UseCallbackExample;
