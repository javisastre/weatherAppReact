const API = {
  key: "0c85f5856ac69992b41e85a1abd59f05",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  return (
    <div className='App'>
      <main>
        <div className='search-box'>
          <input type='text' className='search-bar' placeholder='Search...' />
        </div>
      </main>
    </div>
  );
}

export default App;
