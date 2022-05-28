import styled, { keyframes } from 'styled-components'

import { fadeInLeft, fadeIn, fadeInRight } from 'react-animations'

import { BsPerson } from '@react-icons/all-files/bs/BsPerson'
import { AiOutlineSearch } from '@react-icons/all-files/ai/AiOutlineSearch'
import { MdClose } from '@react-icons/all-files/md/MdClose'

// animations
const fadeLeft = keyframes`${fadeInLeft}`
const fadeRight = keyframes`${fadeInRight}`
const fade = keyframes`${fadeIn}`

// -------------------------------------------------------------- Icons --------------------------------------------------------------//

export const LogIcon = styled(BsPerson)`
  font-size: 11px;
  margin-right: 5px;
`

export const SearchIcon = styled(AiOutlineSearch)`
  font-size: 17px;
  color: ${(props) => props.theme.colors.black};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.hover};
    transition: all 0.2s ease-in-out;
  }
`

export const CloseIcon = styled(MdClose)`
  font-size: 20px;
  color: ${(props) => props.theme.colors.hover};
  text-align: center;
  margin-bottom: 30px;
  width: 100%;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${(props) => props.theme.colors.white};
  }
`

// -------------------------------------------------------------- Navbar --------------------------------------------------------------//

export const Header = styled.header`
  display: flex;
  position: relative;
  justify-content: space-around;
  height: 80px;
  margin-bottom: 20px;
`

export const Nav = styled.nav`
  animation: 1s ${fadeLeft} alternate;
  @media only ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`

export const Ul = styled.ul`
  list-style: none;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Li = styled.li`
  padding: 5px;
  margin-left: 10px;
`

export const A = styled.a`
  display: flex;

  font-size: 10.5px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  display: flex;

  &:hover {
    color: ${(props) => props.theme.colors.hover};
    transition: all 0.2s ease-in-out;
  }
`

export const BrandLink = styled.a`
  font-weight: bold;
  font-size: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.colors.tertiary};
`

export const Span = styled.span`
  color: ${(props) => props.theme.colors.hover};
`
// -------------------------------------------------------------- Navbar --------------------------------------------------------------//
export const Open = styled.div``

export const Hamburger = styled.div`
  display: none;
  z-index: 9999999;

  @media only ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation: 1s ${fadeRight} alternate;
    cursor: pointer;

    ${Open} {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.white};
      animation: 1s ${fade} alternate;
      position: fixed;

      ${A} {
        color: ${(props) => props.theme.colors.hover};
        transition: all 0.2s ease-in-out;
        margin-bottom: 5px;
        font-size: 10.5px;

        span {
          margin-right: 5px;
          font-size: 10.5px;
        }

        &:hover {
          transition: all 0.2s ease-in-out;
          color: ${(props) => props.theme.colors.white};
        }
      }

      ${Ul} {
        flex-direction: column;
      }
    }
  }
`
