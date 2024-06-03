import { useState } from 'react';

export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState('');
  return (
    <>
      <input className='border-4 border-black m-2'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button className="bg-black text-white rounded-lg border-4 h-10 w-20" onClick={() => {
        setTitle('');
        onAddTodo(title);
      }}>Submite</button>
    </>
  )
}
