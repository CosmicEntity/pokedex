import './App.css';
import {Component} from 'react';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';

class App extends Component{

  constructor(){
    super();

    this.state={
      pokemons: [],
      searchField: ''
    }
  }
  componentDidMount(){
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
    .then(response => response.json())
    .then(pokemons => this.setState({pokemons: pokemons.results}) );
  }


  render(){
    const {pokemons,searchField} = this.state;
    let filteredPokemon = pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>POKEDEX</h1>
        <SearchBox
           placeholder="Search Pokemons"
           handleChange={e => this.setState({searchField: e.target.value})}
        />
        <CardList pokemons={filteredPokemon} />
      </div>
    );
  }
}
  


export default App;
