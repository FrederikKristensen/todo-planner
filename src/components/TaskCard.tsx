import { useState } from 'react';

interface TaskCardProps {
  task: string;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const [checked, setChecked] = useState(false);

  const toggleCheck = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleCheck}>{checked ? 'Done' : 'todo'}</button>
      <p>{task}</p>
    </div>
  );
};

export default TaskCard;
