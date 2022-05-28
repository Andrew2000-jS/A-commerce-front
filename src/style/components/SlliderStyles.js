import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

const fader = keyframes`${fadeIn}`

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: 1s ${fader} alternate;
`
export const Slider = styled.div`
  width: 90%;
  height: 500px;
  border-radius: 5px;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 360px;
  }
`

export const Slide = styled.div`
  width: 500%;
  height: 500px;
  display: flex;

  input {
    display: none;
  }
`

export const Firts = styled.div`
  width: 20%;
  transition: 2s;

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
`

export const B1 = styled.div``
export const B3 = styled.div``
export const B2 = styled.div``

export const AutoNav = styled.div`
  position: absolute;
  width: 90%;
  margin-top: 460px;
  display: flex;
  justify-content: center;
  animation: 1s ${fader} alternate;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 325px;
  }

  ${B1}, ${B2}, ${B3} {
    border: 1px solid ${(props) => props.theme.colors.hover};
    padding: 3px;
    border-radius: 50px;
    transition: 1s;

    &:not(:last-child) {
      margin-right: 30px;
      justify-content: center;
    }
  }
`

export const Nav = styled.div`
  position: absolute;
  width: 90%;
  margin-top: -40px;
  display: flex;
  justify-content: center;
  animation: 1s ${fader} alternate;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: -175px;
  }
`

export const Label = styled.label`
  border: 1px solid ${(props) => props.theme.colors.hover};
  background: ${(props) => props.theme.colors.hover};
  padding: 3px;
  border-radius: 50px;
  cursor: pointer;
  transition: 1s;

  &:not(:last-child) {
    margin-right: 30px;
  }

  &:hover {
    background: ${(props) => props.theme.colors.black};
    border-color: ${(props) => props.theme.colors.black};
  }
`

export const ImageContainer = styled.div`
  width: 20%;
  transition: 2s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Input1 = styled.input`
  &:checked ~ ${Firts} {
    margin-left: 0;
  }

  &:checked ~ ${AutoNav} ${B1} {
    z-index: 999999;
    background: black;
    border-color: black;
  }
`
export const Input2 = styled.input`
  &:checked ~ ${Firts} {
    margin-left: -20%;
  }

  &:checked ~ ${AutoNav} ${B2} {
    z-index: 999999;
    background: black;
    border-color: black;
  }
`
export const Input3 = styled.input`
  &:checked ~ ${Firts} {
    margin-left: -40%;
  }

  &:checked ~ ${AutoNav} ${B3} {
    z-index: 999999;
    background: black;
    border-color: black;
  }
`
