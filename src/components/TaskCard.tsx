interface TaskCardProps {
  task: string;
}

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div>
      <p>{task}</p>
    </div>
  );
};

export default TaskCard;
