import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  margin: 3rem;
  text-align: center;
`;

const Tagline1 = styled.h1`
  font-size: 2.8rem;
  font-weight: 200;
  padding: 0.2rem;
  margin-top: 2.5rem;
  color: hsl(229, 6%, 66%);
`;

const Tagline2 = styled.span`
  font-weight: 600;
  color: hsl(234, 12%, 34%);
`;

const Description = styled.p`
  font-size: 20px;
  max-width: 700px;
  display: inline-block;
`;

class PageHead extends Component {
  static defaultProps = {
    tagline1: 'Header Line One',
    tagline2: 'Header Line Two',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo recusandae eos commodi pariatur tenetur nulla natus animi.'
  }

  render() {
    return (
      <Header>
        <Tagline1>
          {this.props.tagline1}<br />
          <Tagline2>{this.props.tagline2}</Tagline2>
        </Tagline1>

        <Description>{this.props.desc}</Description>
      </Header>
    )
  }
}

export default PageHead;