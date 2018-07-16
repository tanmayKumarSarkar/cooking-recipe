import React, { Component } from 'react';
import './App.css';

import Recipes from './components/Recipes';
import Header from './components/Header';
import Form from './components/Form';
import $ from 'jquery';

const API_KEY = process.env.REACT_APP_API_KEY;
 // eslint-disable-next-line
const env_mode =  process.env.REACT_APP_STAGE;
const cors_url = process.env.REACT_APP_CORS_ANYWHERE_URL;

class App extends Component {

  state = {
    recipes: [],
    text: 'Loading...'
  }

  componentWillMount = async () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    if (recipes == null || recipes.length === 0){
      const api_call = await fetch(`${cors_url}http://food2fork.com/api/search?key=${API_KEY}&sort=t`);
      const data = await api_call.json();
      //console.log(data);
      if(data.count <= 0){
        return this.setState({text: "No data found..."});
      }else{
        this.setState({recipes: data.recipes, text: "loaded"});
      }
    }else {
       this.setState({recipes, text: "loaded"});
    }  
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
  }

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    // this.setState({ recipes });
    // console.log(this.state);
    if(recipes != null && recipes.length !== 0)
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
  }

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }

  getRecipe = async e => {
     e.preventDefault();
     const recipeName = e.target.elements.recipeName.value;
     const api_call = await fetch(`${cors_url}http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
     const data = await api_call.json();
     if(data.count <= 0) {
       this.setState({text: "NMF"});
    }
     else this.setState({recipes: data.recipes, text: 'MF'});
     //$('#preloader').fadeOut('slow',function(){$(this).remove();});
     //console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <Header  />
        <Form getRecipe = {this.getRecipe} />
        {this.state.text === "NMF" ? 
          <div className="text__output"> No matches found, try searching again...  <br/><hr/><h4>Other Recipes...</h4></div>  : ''}
        {this.state.recipes != null && this.state.recipes.length !== 0  ? //console.log(this.state.recipes, this.state.text) : 
           <Recipes recipes={this.state.recipes} /> : 
          <div className="text__output"> {this.state.text} </div>  
        }
        <div id="preloader"></div>
      </div>
    );
  }
}

export default App;
