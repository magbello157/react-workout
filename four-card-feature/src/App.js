import React, { Component } from 'react';
import './App.css';
import PageHead from './components/PageHead';
import Card from './components/Card';
import Footer from './components/Footer';

class App extends Component {
  render() {

    const header = {
      tagline1: 'Reliable, efficient delivery',
      tagline2: 'Powered by Technology',
      desc: "Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful"
    }

    return (
      <div>
        <PageHead
          tagline1={header.tagline1}
          tagline2={header.tagline2}
          desc={header.desc}
        />
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
        <Footer
          dev='Muhammad A.G. Bello'
          portfolio='https://github.com/magbello157'
        />
      </div>
    );
  }
}

export default App;