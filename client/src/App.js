import React from 'react';
import './App.scss';
import axios from 'axios';
import PlayersCard from './PlayersCard';
import NavBar from './NavBar';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
     players: []

    };
  }

componentDidMount() {

  axios
  .get('http://localhost:5000/api/players')
  .then(res => this.setState({ players: res.data }))
  
  .catch(err => console.log('errrooorrr'))

}

render(){
 
  return (
    <div>
      <div data-testid='display-nav'>
      <NavBar />
      </div>
      <div data-testid='display-card' >
     <PlayersCard players={this.state.players} />
     </div> 
    </div>
  )
}



}




export default App;
