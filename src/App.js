import React, { useState ,useEffect} from 'react';
import './App.css';

const factsData = [
  {
    id: 1,
    category: 'Science',
    fact: 'Honey never spoils.',
    details: 'Archaeologists have discovered pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.',
  },
  {
    id: 2,
    category: 'Technology',
    fact: 'Ada Lovelace was the first computer programmer.',
    details: 'Ada Lovelace, an English mathematician and writer, is often regarded as the world\'s first computer programmer. She worked closely with Charles Babbage on the Analytical Engine.',
  },
  {
    id: 3,
    category: 'Nature',
    fact: 'The hummingbird is the only bird that can fly backward.',
    details: 'Hummingbirds are incredible creatures with unique flying abilities, including the ability to hover and even fly backward.',
  },
  {
    id: 4,
    category: 'History',
    fact: 'The Great Wall of China is not visible from space with the naked eye.',
    details: 'Contrary to popular belief, the Great Wall of China cannot be seen from space without aid. It is challenging to spot even from low Earth orbit without specialized equipment.',
  },
  {
    id: 5,
    category: 'Science',
    fact: 'A day on Venus is longer than a year on Venus.',
    details: 'Venus rotates on its axis so slowly that a single day on Venus (from sunrise to sunrise) takes longer than one Venusian year (the time it takes to orbit the Sun).',
  },
  {
    id: 6,
    category: 'Animals',
    fact: 'Polar bears have black skin.',
    details: 'Despite their white fur, polar bears have black skin underneath, which helps them absorb and retain heat from the sun.',
  },
  {
    id: 7,
    category: 'History',
    fact: 'Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid of Giza.',
    details: 'Cleopatra, the last pharaoh of ancient Egypt, lived around 2,000 years ago, while the Great Pyramid was built over 2,500 years before her time. The Moon landing occurred in 1969.',
  },
  {
    id: 8,
    category: 'Science',
    fact: 'A lightning bolt is hotter than the surface of the Sun.',
    details: 'A typical lightning bolt can reach temperatures of around 30,000 degrees Celsius (54,000 degrees Fahrenheit), which is hotter than the surface of the Sun.',
  },
  {
    id: 9,
    category: 'Nature',
    fact: 'A group of flamingos is called a "flamboyance."',
    details: 'When a large number of flamingos gather together, they are referred to as a "flamboyance." These gatherings are a breathtaking sight with their vibrant pink plumage.',
  },
  {
    id: 10,
    category: 'Technology',
    fact: 'The first website ever is still online.',
    details: 'The first website ever created, info.cern.ch, is still online. It was published by Tim Berners-Lee in 1991 and provided information about the World Wide Web project.',
  },
  {
    id: 11,
    category: 'Science',
    fact: 'Astronauts cannot burp in space.',
    details: 'In the microgravity environment of space, liquids and gases in an astronaut\'s stomach do not separate as they do on Earth, making it impossible for them to burp.',
  },
  {
    id: 12,
    category: 'Animals',
    fact: 'Octopuses have three hearts.',
    details: 'Octopuses have three hearts: two branchial hearts that pump blood through the gills and one systemic heart that pumps blood to the rest of the body.',
  },
  {
    id: 13,
    category: 'History',
    fact: 'The shortest war in history was between Britain and Zanzibar on August 27, 1896.',
    details: 'The Anglo-Zanzibar War lasted between 38 and 45 minutes, making it the shortest recorded war in history.',
  },
  {
    id: 14,
    category: 'Nature',
    fact: 'The tongue of a blue whale can weigh as much as an elephant.',
    details: 'Blue whales, the largest animals on Earth, have tongues that can weigh as much as an elephant (approximately 5 tons).',
  },
  {
    id: 15,
    category: 'Science',
    fact: 'Neutron stars can spin at a rate of up to 600 rotations per second.',
    details: 'Neutron stars, the remnants of massive stars after a supernova, can rotate incredibly fast, with some reaching speeds of up to 600 rotations per second.',
  },
  {
    id: 16,
    category: 'Technology',
    fact: 'The first computer mouse was made of wood.',
    details: 'The original computer mouse, invented by Douglas Engelbart in the 1960s, was made of wood and had two wheels to roll in two dimensions.',
  },
  {
    id: 17,
    category: 'Nature',
    fact: 'The Amazon rainforest produces 20% of the world\'s oxygen.',
    details: 'The Amazon rainforest is often referred to as the "lungs of the Earth" because it produces approximately 20% of the world\'s oxygen through photosynthesis.',
  },
  {
    id: 18,
    category: 'Science',
    fact: 'A day on Mercury is longer than a year on Mercury.',
    details: 'Due to its slow rotation and fast orbit around the Sun, a day on Mercury (the time it takes to complete one rotation) is longer than one Mercury year (the time it takes to orbit the Sun).',
  },
  {
    id: 19,
    category: 'History',
    fact: 'The Eiffel Tower can grow taller during the summer.',
    details: 'During hot summer days, the iron structure of the Eiffel Tower can expand due to the heat, making it grow slightly taller.',
  },
  {
    id: 20,
    category: 'Random',
    fact: 'The world\'s oldest known recipe is for beer.',
    details: 'The oldest known written recipe is for beer and dates back to around 5,000 BC in ancient Mesopotamia.',
  },
];



const UNSPLASH_ACCESS_KEY = '4f8P-2rpJnK-4TDOo13TEfc_rBG449P6SlxGKOLLdRM'; // Replace this with your Unsplash API access key

function fetchRandomImage() {
  return fetch(`https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_ACCESS_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      return data.urls.regular;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
}

function Facts() {
  const [currentFact, setCurrentFact] = useState(factsData[0]);
  const [image, setImage] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const randomFact = () => {
    const randomIndex = Math.floor(Math.random() * factsData.length);
    setCurrentFact(factsData[randomIndex]);

    fetchRandomImage().then((imageUrl) => {
      if (imageUrl) {
        setImage(imageUrl);
      }
    });
  };

  useEffect(() => {
    randomFact();
  }, []);

  const handleKnowMore = () => {
    setShowDetails(!showDetails);
  };

  const handleLogout = () => {
    // Reset the current page to the default "facts" page
    setCurrentFact(factsData[0]);
    setShowDetails(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fascinating Facts</h1>
        <div className="fact-card">
          <div className="image-container">
            {image && <img src={image} alt="Unsplash" />}
          </div>
          <h2>{currentFact.category}</h2>
          <p>{currentFact.fact}</p>
          {showDetails && <p>{currentFact.details}</p>}
          <button onClick={randomFact}>Next Fact</button>
        </div>
        <p>Click "Next Fact" to see more intriguing information!</p>
        <footer>
          <div className="button-container">
            <button className="logout-button" onClick={handleLogout}>
              Reset
            </button>
            <button className="know-more-button" onClick={handleKnowMore}>
              {showDetails ? 'Hide Details' : 'Know More'}
            </button>
          </div>
        </footer>
      </header>
    </div>
  );
}

function FactCard({ fact }) {
  return (
    <div className="fact-card">
      <h2>{fact.category}</h2>
      <p>{fact.fact}</p>
      <p>{fact.details}</p>
    </div>
  );
}

function AllFacts() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>All Facts</h1>
        <div className="facts-container">
          {factsData.map((fact) => (
            <FactCard key={fact.id} fact={fact} />
          ))}
        </div>
      </header>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('facts');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <nav>
        <ul className="nav-list">
          <li onClick={() => handleNavigation('facts')}>Facts</li>
          <li onClick={() => handleNavigation('allFacts')}>All Facts</li>
        </ul>
      </nav>
      {currentPage === 'facts' && <Facts />}
      {currentPage === 'allFacts' && <AllFacts />}
    </div>
  );
}

export default App;