import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nyhetslista from './components/Nyhetslista';
import data from './fuskdata';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      articles: [
      {
        urlToImage: "https://source.unsplash.com/random/400x225/?pizza", 
        title: "Testnyhet", 
        description: "beskriving av nyheten"},
        {
          urlToImage: "https://source.unsplash.com/random/400x225/?pizza", 
          title: "Testnyhet", 
          description: "beskriving av nyheten"}]
        };
  }

  componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?country=se&apiKey=6268ef9632b744888cdd25b5c9730977").then( function(response) {
      return response.json()
      } ).then(jsondata => {
      this.setState({ articles: jsondata.articles })
      })
        
    
      
      
  }

  render() {
    return (
    
      <Nyhetslista artikellista={this.state.articles}/>
      
    );
  }
}

export default App;
