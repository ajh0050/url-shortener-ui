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
    this.fetchUrls()
  }
  fetchUrls = () => {
    fetch('http://localhost:3001/api/v1/urls').then(res => res.json()).then(data => {
      this.setState({urls: data.urls})
    })
  }
  updateUrls = (newUrl) => {
    this.setState({urls:[...this.state.urls,newUrl]})
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm updateUrls={this.updateUrls}/>
        </header>
        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
