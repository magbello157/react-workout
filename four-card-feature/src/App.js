import React, { Component } from 'react';
import './App.css';
import PageHead from './components/PageHead';
import { CardSection } from './components/CardSection';
import Card from './components/Card';
import Footer from './components/Footer';
import supervisorImg from './images/icon-supervisor.svg';
import teamBuilderImg from './images/icon-team-builder.svg';
import karmaImg from './images/icon-karma.svg';
import calculatorImg from './images/icon-calculator.svg';
import { Wrapper } from './components/Wrapper';

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
      alt: 'Supervisor Icon',
      topline: 'hsl(180, 62%, 55%) solid 5px'
    }

    const card2 = {
      title: 'Team Builder',
      body: 'Scans our talent network to create the optimal team for your project',
      image: teamBuilderImg,
      alt: 'Team Builder Icon',
      topline: 'hsl(0, 78%, 62%) solid 5px'
    }

    const card3 = {
      title: 'Karma',
      body: 'Regularly evaluates our talent to ensure quality',
      image: karmaImg,
      alt: 'Karma Icon',
      topline: 'hsl(34, 97%, 64%) solid 5px'
    }

    const card4 = {
      title: 'Calculator',
      body: 'Uses data from past projects to provide better delivery estimates',
      image: calculatorImg,
      alt: 'Calculator Icon',
      topline: 'hsl(212, 86%, 64%) solid 5px'
    }

    const footer = {
      developer: 'Muhammad A.G. Bello',
      portfolio: 'https://github.com/magbello157'
    }

    return (
      <Wrapper>
        <PageHead {...header} />
        <CardSection>
          <div>
            <Card {...card1} />
          </div>
          <div>
            <Card {...card2} />
            <Card {...card3} />
          </div>
          <div>
            <Card {...card4} />
          </div>
        </CardSection>
        <Footer {...footer} />
      </Wrapper>
    );
  }
}

export default App;