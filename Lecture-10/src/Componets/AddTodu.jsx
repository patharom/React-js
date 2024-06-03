import { useState } from 'react';

export  function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState('');
  return (
    <>
      <input className='bg-gray-500 text-amber-300'
        placeholder="Add todo"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button className='bg-indigo-200 ml-2 w-14' onClick={() => {
        setTitle('');
        onAddTodo(title);
      }}>Add</button>
    </>
  )
}
export default AddTodo;