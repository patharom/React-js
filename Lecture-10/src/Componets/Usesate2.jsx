import { useState } from 'react';

export  function Sate2() {
  const [age, setAge] = useState(0);

  function increment() {
    setAge(a => a + 1);
  }

  return (
    <>
      <h1>Your age: {age}</h1>
      <button className='w-20 bg-gray-500 m-2' onClick={() => {
        increment();
        increment();
        increment();
        increment();
        increment();
      }}>+5</button>
      <button className='w-20 bg-gray-500 m-2' onClick={() => {
        increment();
      }}>+1</button>
    </>
  );
}
export default Sate2;
