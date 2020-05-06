import React, { Component } from 'react';
import styled from 'styled-components';

const FooterSection = styled.footer`
  margin-top: 5rem;
`;

const Attribution = styled.p`
  font-size: 11px;
  text-align: center;
`;

const AttrLink = styled.a`
  color: hsl(228, 45%, 44%);
`;


class Footer extends Component {
  static defaultProps = {
    challengeBy: 'Frontend Mentor',
    femLink: 'https://www.frontendmentor.io?ref=challenge',
    developer: 'John Doe',
    devPortfolio: '#'
  }
  render() {
    return (
      <FooterSection>
        <Attribution>
          Challenge by <AttrLink href={this.props.femLink} target='_blank'>{this.props.challengeBy}</AttrLink>
          Developed by <AttrLink href={this.props.portfolio} target='_blank'>{this.props.dev}</AttrLink>
        </Attribution>
      </FooterSection>
    );
  }
}

export default Footer;
