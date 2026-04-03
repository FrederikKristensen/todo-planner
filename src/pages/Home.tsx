import React, { useState } from 'react';
import TaskCard from '../components/TaskCard';

const Home = () => {
  // Our todo tasks
  const [tasks, setTasks] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  // Our function to handle the submit value
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="To do..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <div>
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Home;
