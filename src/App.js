import React from 'react';

const api =
{
    key: "7c36503de65012532dc787a6f09a76fd",
    base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..."/>
           
        </div>
        
      </main>
    </div>
  );
}


export default App;
