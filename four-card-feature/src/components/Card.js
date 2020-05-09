import React, { Component } from 'react';
import styled from 'styled-components';
import image from '../images/icon-karma.svg';
import { Paragraph } from './Paragraph';

const Box = styled.div`
  background: #fff;
  border: 1px solid #ccc;
  padding: 1.5rem;
  margin: 1rem;
  margin-top: 2;
  width: 20rem;
  height: 15rem;
  border-radius: 0.4rem;
  box-shadow: 2px 6px 10px 0px rgba(82,75,82,0.53);
`;

const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: hsl(234, 12%, 34%);
  text-align: left;
  padding-left: 10px;
`;

const Body = styled(Paragraph)`
  text-align: left;
`;

const Icon = styled.img`
  float: right;
  margin-right: 5px;
`;

class Card extends Component {

  static defaultProps = {
    title: 'Feature Card',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, cumque. Ea, tempora.',
    image: image
  }

  render() {
    return (
      <Box>
        <Title>{this.props.title}</Title>
        <Body>{this.props.body}</Body>
        <Icon src={this.props.image} alt={this.props.alt} />
      </Box>
    );
  }
}

export default Card;