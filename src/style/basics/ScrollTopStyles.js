import styled, { keyframes } from 'styled-components'
import { IoIosArrowUp as Up } from '@react-icons/all-files/io/IoIosArrowUp'
import { fadeIn } from 'react-animations'

const fader = keyframes`${fadeIn}`

export const ArrowContainer = styled.div`
  position: fixed;
  border: 1px solid #000;
  line-height: 40px;
  color: #fff;
  background-color: #000;
  width: 39px;
  height: 39px;
  text-align: center;
  right: 50px;
  bottom: 50px;
  transition: 0.5s;
  animation: 0.8s ${fader} alternate;
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    background-color: ${(props) => props.theme.colors.hover};
    border-color: ${(props) => props.theme.colors.hover};
  }
`

export const Arrow = styled(Up)`
  font-size: 20px;
`
