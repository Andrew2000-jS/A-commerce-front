import styled, { keyframes } from 'styled-components'
import { fadeInLeft, fadeInRight, fadeIn } from 'react-animations'
import { AiOutlineShoppingCart } from '@react-icons/all-files/ai/AiOutlineShoppingCart'

const fadeLeft = keyframes`${fadeInLeft}`
const fadeRight = keyframes`${fadeInRight}`
const fader = keyframes`${fadeIn}`

export const CartIcon = styled(AiOutlineShoppingCart)``

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20%;

  & {
    p {
      animation: 1s ${fadeLeft} alternate;
    }
  }

  &:hover {
    p {
      display: none;
    }

    button,
    p:nth-child(4) {
      display: block;
      animation: 1s ${fadeRight} alternate;
      cursor: pointer;
    }
  }
`

export const CardImg = styled.div`
  & {
    img {
      height: 230px;
      width: 230px;
      animation: 0.8s ${fader} alternate;
    }
  }
`

export const CardDescription = styled.div`
  & {
    p {
      text-align: center;
    }

    P:nth-child(2) {
      color: #707070;
    }

    p:nth-child(4) {
      text-align: center;
      transition: 0.5s;
      color: #707070;
      font-size: 14px;

      &:hover {
        transition: 0.5s;
        color: #404040;
      }
    }

    button {
      padding: 4px 10px;
      background-color: #000;
      border: 1px solid #000;
      color: #fff;
      transition: 0.5s;

      &:hover {
        transition: 0.5s;
        background-color: #404040;
        border-color: #404040;
      }
    }

    button,
    p:nth-child(4) {
      display: none;
    }
  }
`
