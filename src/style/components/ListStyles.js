import styled, { keyframes } from 'styled-components'
import { fadeInUp, fadeInDown } from 'react-animations'

const fdu = keyframes`${fadeInUp}`
const fdw = keyframes`${fadeInDown}`

export const ListContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: -0px 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`
export const CategoriesWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 13px;
  width: 40%;
  margin-top: 10%;
  margin-bottom: -3%;

  & {
    p {
      display: none;
    }

    ul {
      list-style: none;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    & {
      flex-direction: column;

      p {
        display: block;
        cursor: pointer;
      }
    }
  }
`

export const Ul = styled.ul`
  @media ${(props) => props.theme.breakpoints.sm} {
    & {
      animation: 0.5s ${({ isDown }) => (isDown ? fdw : fdu)} alternate;
    }
  }
`
