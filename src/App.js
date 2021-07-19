import './App.css';
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    componentDidMount () {
        fetch(USERS_URL)
            .then(res => res.json())
            .then(monsters => {
                console.log(`monsters: ${monsters}`);
                this.setState({monsters})
            }).catch( e=> console.error(e));
    }

    onSearchChangeHandler = evt => {
        this.setState({searchField: evt.target.value})
    }


    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox
                    placeholder='searchmonster'
                    changeHandler={this.onSearchChangeHandler}
                />
                <CardList monsters={ filteredMonsters }/>
            </div>
        );
  }
}

export default App;
