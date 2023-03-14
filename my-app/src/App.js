import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';


function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    // Agregue la lógica para buscar en su base de datos o en una API aquí
    const results = ['resultado1', 'resultado2', 'resultado3'];
    setSearchResults(results);
  };
  return (
    <div>
      <h1>CORPORACIONES.CORP</h1>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {searchResults.map(result => <li key={result}>{result}</li>)}
      </ul>
    </div>
  );
}

export default App;