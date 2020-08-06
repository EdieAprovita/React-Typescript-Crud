import React, { Fragment, useState } from 'react';

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
    <Fragment>
      <div className='card'>
        <div className='card-body'>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              onChange={(e) => setNewTask(e.target.value)}
              value={newTask}
              className='form-control'
            />
            <button>Save</button>
          </form>
        </div>
      </div>
      {task.map((t: ITask, i: number) => {
        return <h1 key={i}>{t.name}</h1>;
      })}
    </Fragment>
  );
}

export default App;
