import { useState } from 'react'
import { puppyList } from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  // Find the puppy whose ID matches the currently featured ID
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log("Featured Pup: ", featuredPup);

  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p 
            onClick={() => setFeatPupId(puppy.id)} 
            key={puppy.id}
            className="puppy-name"
          >
            {puppy.name}
          </p>
        );
      })}

      {featPupId && featuredPup && (
        <div className="featured-pup">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;

