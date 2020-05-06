import React, { Component } from 'react';
import './App.css';
import PageHead from './components/PageHead';
import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <div>
        <PageHead />
        <div className="card-section">
          <div>
            <Card />
          </div>
          <div>
            <Card />
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </div>
      </div>
    );
  }
}

export default App;