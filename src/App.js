import React, { useState } from 'react';
import './App.css';
import Overview from './categories/Overview';
import AirQuality from './categories/AirQuality';
import WaterQuality from './categories/WaterQuality';
import Biodiversity from './categories/Biodiversity';
import PublicHealth from './categories/PublicHealth';
import Energy from './categories/Energy';
// Import other category components as needed

const categories = [
  "Overview", "Air quality", "Water quality", "Biodiversity",
  "Public Health", "Energy", "Waste Management", "Forests",
  "Oceans", "Land Use"
];

function App() {
  const [activeCategory, setActiveCategory] = useState('Overview');

  const renderContent = () => {
    switch(activeCategory) {
      case 'Overview':
        return <Overview />;
      case 'Air quality':
        return <AirQuality />;
      case 'Water quality':
        return <WaterQuality />;
      case 'Biodiversity':
        return <Biodiversity />;
      case 'Public Health':
        return <PublicHealth />;
      case 'Energy':
        return <Energy />;
      // Add cases for other categories
      default:
        return <div>Content for {activeCategory} coming soon!</div>;
    }
  };

  return (
    <div className="App">
      <h1>EcoDash: Environment and Biodiversity Dashboard</h1>
      <div className="category-buttons">
        {categories.map(category => (
          <button 
            key={category}
            onClick={() => setActiveCategory(category)}
            className={activeCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;