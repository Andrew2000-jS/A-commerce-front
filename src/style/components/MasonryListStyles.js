import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem;
  column-count: 4;

  @media only screen and (max-width: 1000px) {
    & {
      column-count: 3;
    }
  }

  @media only screen and (max-width: 800px) {
    & {
      column-count: 2;
    }
  }

  @media only screen and (max-width: 400px) {
    & {
      column-count: 1;
    }
  }
`
