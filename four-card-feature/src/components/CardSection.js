import styled from 'styled-components';

export const CardSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  /* Tablet */
  @media (max-width: 1068px) {
    flex-direction: column;
  }
`;