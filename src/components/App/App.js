import React, { Component } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  componentDidMount() {
    // fetch('http://localhost:3001/api/v1/urls').then(res => res.json()).then(data => {
    //   this.setState({urls: data.urls})
    // })
    this.fetchUrls()
  }
  fetchUrls = () => {
    fetch('http://localhost:3001/api/v1/urls').then(res => res.json()).then(data => {
      this.setState({urls: data.urls})
    })
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm fetchUrls={this.fetchUrls}/>
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
