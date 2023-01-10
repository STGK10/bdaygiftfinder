import React, { useState } from 'react';

const GiftIdeas = () => {
  const [giftIdeas, setGiftIdeas] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [interests, setInterests] = useState('');
  const [relationship, setRelationship] = useState('');
  const [occasion, setOccasion] = useState('');
  
  const handleSubmit = event => {
    event.preventDefault();
    fetch(`https://stgk10.github.io/bdaygiftfinder/?age=${age}&gender=${gender}&interests=${interests}&relationship=${relationship}&occasion=${occasion}`)
      .then(response => response.text())
      .then(giftIdeas => {
        setGiftIdeas(giftIdeas);
      });
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Age:
          <input type="text" value={age} onChange={event => setAge(event.target.value)} />
        </label>
        <br />
        <label>
          Gender:
          <input type="text" value={gender} onChange={event => setGender(event.target.value)} />
        </label>
        <br />
        <label>
          Interests:
          <input type="text" value={interests} onChange={event => setInterests(event.target.value)} />
        </label>
        <br />
        <label>
          Relationship:
          <input type="text" value={relationship} onChange={event => setRelationship(event.target.value)} />
        </label>
        <br />
        <label>
          Occasion:
          <input type="text" value={occasion} onChange={event => setOccasion(event.target.value)} />
        </label>
        <br />
        <button type="submit">Generate Gift Ideas</button>
      </form>
      <p>{giftIdeas}</p>
    </div>
  );
};

export default GiftIdeas;
