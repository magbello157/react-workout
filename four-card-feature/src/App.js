import React, { Component } from 'react';
import './App.css';
import PageHead from './components/PageHead';
import Card from './components/Card';
import Footer from './components/Footer';
import supervisorImg from './images/icon-supervisor.svg';
import teamBuilderImg from './images/icon-team-builder.svg';
import karmaImg from './images/icon-karma.svg';
import calculatorImg from './images/icon-calculator.svg';
import { CardSection } from './components/CardSection';

class App extends Component {
  render() {

    const header = {
      tagline1: 'Reliable, efficient delivery',
      tagline2: 'Powered by Technology',
      desc: "Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful"
    }

    const card1 = {
      title: 'Supervisor',
      body: 'Monitors activity to identify project roadblocks',
      image: supervisorImg,
      alt: 'Supervisor Icon'
    }

    const card2 = {
      title: 'Team Builder',
      body: 'Scans our talent network to create the optimal team for your project',
      image: teamBuilderImg,
      alt: 'Team Builder Icon'
    }

    const card3 = {
      title: 'Karma',
      body: 'Regularly evaluates our talent to ensure quality',
      image: karmaImg,
      alt: 'Karma Icon'
    }

    const card4 = {
      title: 'Calculator',
      body: 'Uses data from past projects to provide better delivery estimates',
      image: calculatorImg,
      alt: 'Calculator Icon'
    }

    const footer = {
      developer: 'Muhammad A.G. Bello',
      portfolio: 'https://github.com/magbello157'
    }

    return (
      <div>
        <PageHead
          tagline1={header.tagline1}
          tagline2={header.tagline2}
          desc={header.desc}
        />
        <CardSection>
          <div>
            <Card
              title={card1.title}
              body={card1.body}
              image={card1.image}
              alt={card1.alt}
            />
          </div>
          <div>
            <Card
              title={card2.title}
              body={card2.body}
              image={card2.image}
              alt={card2.alt}
            />
            <Card
              title={card3.title}
              body={card3.body}
              image={card3.image}
              alt={card3.alt}
            />
          </div>
          <div>
            <Card
              title={card4.title}
              body={card4.body}
              image={card4.image}
              alt={card4.alt}
            />
          </div>
        </CardSection>
        <Footer
          dev={footer.developer}
          portfolio={footer.portfolio}
        />
      </div>
    );
  }
}

export default App;