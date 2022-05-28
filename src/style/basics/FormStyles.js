import styled, { keyframes } from 'styled-components'
import { IoIosArrowBack } from '@react-icons/all-files/io/IoIosArrowBack'
import { fadeInDown } from 'react-animations'

const fader = keyframes`${fadeInDown}`

export const Icon = styled(IoIosArrowBack)`
  font-size: 20px;
`

export const Logo = styled.a`
  position: fixed;
  left: 35%;
  top: 10%;
  cursor: pointer;
  transition: 0.5s;
  z-index: 100000;
  animation: 1s ${fader} alternate;

  &:hover {
    transition: 0.5s;
    color: ${(props) => props.theme.colors.hover};
  }

  @media only ${(props) => props.theme.breakpoints.md} {
    left: 5%;
    top: 5%;
  }
`
export const LogContainer = styled.div`
  position: absolute;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('/shopping.jpg');
  background-size: contain;
`

export const LogForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 600px;
  width: 450px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 2px 5px 15px 5px rgba(0, 0, 0, 0.43);
  animation: 1s ${fader} alternate;

  @media only ${(props) => props.theme.breakpoints.md} {
    background: #ffffff8c;
    width: 100%;
    height: 100%;
  }
`

export const InputWrapper = styled.div`
  padding-bottom: 20px;

  @media only ${(props) => props.theme.breakpoints.md} {
    width: 100%;
  }
`

export const TitleWrapper = styled.h1`
  padding-bottom: 30px;
`
export const P = styled.p`
  padding-top: 25px;
  color: #737373;
`

export const A = styled.a`
  cursor: pointer;
  color: ${(props) => props.theme.colors.secondary};
  padding-left: 3px;
  transition: all 0.5s ease-out;

  &:hover {
    color: ${(props) => props.theme.colors.hover};
    transition: all 0.5s ease-out;
  }
`
