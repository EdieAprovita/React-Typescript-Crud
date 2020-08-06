import React, { useState } from 'react';

type FormElement = React.FormEvent<HTMLFormElement>;
interface ITask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>('');
  const [task, setTask] = useState<ITask[]>([]);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask('');
  };

  const addTask = (name: string) => {
    const newTask: ITask[] = [...task, { name, done: false }];
    setTask(newTask);
  };
  return (
    <div className='container p-4'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <div className='card'>
            <div className='card-body'>
              <form onSubmit={handleSubmit}>
                <input
                  type='text'
                  onChange={(e) => setNewTask(e.target.value)}
                  value={newTask}
                  className='form-control'
                  autoFocus
                />
                <button className='btn btn-success btn-block mt2'>Save</button>
              </form>
            </div>
          </div>
          {task.map((t: ITask, i: number) => (
            <div className='car card-body mt-2' key={i}>
              <h2 style={{ textDecoration: t.done ? 'line-through' : '' }}>
                {t.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
