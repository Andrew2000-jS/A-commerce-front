import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  & {
    a {
      color: #929292;
      text-decoration: none;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    & {
      margin-top: 15%;
    }
  }
`

export const Banner = styled.div`
  width: 100%;
  height: 250px;

  & {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
    }

    h1 {
      display: block;
      position: relative;
      z-index: 2;
      color: #fff;
      top: -55%;
      text-align: center;
    }
  }
`

export const ElementInfo = styled.div`
  width: 90%;
  display: grid;
  align-content: center;
  justify-items: center;
  grid-template-columns: 70% 30%;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 100%;
  }

  & {
    h2 {
      display: block;
      width: 100%;
      margin-bottom: 4%;
      font-weight: 500;
    }
  }
`

export const Description = styled.div`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.md} {
    & {
      margin-bottom: 15%;
    }
  }
`

export const Article = styled.div`
  width: 100%;
`
