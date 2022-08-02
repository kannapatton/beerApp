import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import BeerCard from './BeerCard';

//import MaterialUIBeerCard from './MaterialUIBeerCard';  

class App extends Component {
  constructor(){
    super()

    this.state = {
      isClicked:true,
      arrayOfBeer: []
    }
  }
  handleClick = (event)=>{
    this.state.isClicked ?
    this.setState({isClicked : false}) :
    this.setState({isClicked : true})
  };
 likeItem = (event) =>{
  <p>{this.state.isClicked ? "true" : "false"}</p>
 }

  componentDidMount() {
  axios.get('https://api.punkapi.com/v2/beers')
    .then( res => {
      const arrayOfBeer = res.data
      this.setState({arrayOfBeer})
    })
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
      {/* //<MaterialUIBeerCard abv="5%" /> */}
      <ol className="list">{this.state.arrayOfBeer.map((beer, index)=>{
        return (
          <BeerCard key={index}
           name={beer.name}
           image_url={beer.image_url} 
          first_brewed={beer.first_brewed}
          tagline={beer.tagline}
          description={beer.description}
          abv={beer.abv}
          clickToLike= {this.state.handleClick}
          />
        )
       
      })}</ol>
       
      </header>
    </div>
  );
};
};

export default App;
