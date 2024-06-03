import { useState } from 'react';

export  function Form2() {
  const [person, setPerson] = useState({
    name: 'statue of liberty ',
    artwork: {
      title: 'statue of liberty',
      city: 'new york',
      //image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ-A6lIj2J03nzJ8259vXh_52kPUpGjYE4eawMnAd2&s'
      image: 'data:image/jpeg;base64,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',
    }

  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }

  return (
    <>
    <div className='d-falx justify-start bg-rose-200'>
      <label className='bg-cyan-500'>
        Name:
        <input className='bg-teal-300 ml-6'
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <br></br>
      <br></br>
      <label className='bg-cyan-500'>
        Title:
        <input className='bg-teal-300 ml-6'
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <br></br>
      <br></br>
      <label className='bg-cyan-500'>
        City:
        <input className='bg-teal-300 ml-6'
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <br></br>
      <br></br>
      
      <label className='bg-cyan-500'>
        Image:
        <input className='bg-teal-300 ml-6'
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <br></br>
      <br></br>
      <p className='bg-gray-500 text-slate-200'>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <br></br>
      <img 
        src={person.artwork.image} 
        alt={person.artwork.title}
      />
      </div>
    </>
  );
}
export default Form2 ;