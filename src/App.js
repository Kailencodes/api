import Search from './componenets/Search';
import './App.css';
import TopArtists from './componenets/TopArtists';
import RecommendedTracks from './componenets/RecommendedTracks';




function App() {

  return (
    <div className="App">
      <header className='App-header'>
      <Search />
      <TopArtists />
      <RecommendedTracks />
      </header>
    </div>
  );
}

export default App;
