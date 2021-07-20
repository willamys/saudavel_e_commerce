import styled from 'styled-components';

export const Content = styled.div`
  width:100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;