import styled from 'styled-components'
import { IoIosArrowBack } from '@react-icons/all-files/io/IoIosArrowBack'
import { IoIosArrowForward } from '@react-icons/all-files/io/IoIosArrowForward'

export const Container = styled.div`
  position: relative;
  vertical-align: middle;
  display: inline-block;
  width: ${(props) => props.width};
  hieght: ${(props) => props.height};
  line-height: 50px;
  padding: 0 10px 0 16px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;

  & {
    div {
      display: flex;
      justify-content: space-around;
      right: 20%;
      color: ${(props) => props.theme.colors.hover};
    }

    span:nth-child(1) {
      font-size: 13px;
    }
  }

  @media only ${(props) => props.theme.breakpoints.md} {
    & {
      height: 50px;
      width: 100%;
      margin-bottom: 5%;
      display: ${(props) => props.display};
    }
  }
`

export const Next = styled(IoIosArrowForward)`
  position: absolute;
  top: 35%;
  left: 90%;
  color: ${(props) => props.theme.colors.hover};
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    color: ${(props) => props.theme.colors.black};
  }
`

export const Prev = styled(IoIosArrowBack)`
  position: absolute;
  top: 35%;
  right: 90%;
  color: ${(props) => props.theme.colors.hover};
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    color: ${(props) => props.theme.colors.black};
  }
`
