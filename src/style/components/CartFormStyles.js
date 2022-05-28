import styled from 'styled-components'
import { IoMdArrowDropdown as Down } from '@react-icons/all-files/io/IoMdArrowDropdown'

export const DownIcon = styled(Down)`
  margin: 2% 0 0 3%;
  font-size: 18px;
  width: 100%;
`

export const Container = styled.div`
  background-color: #fff;
  margin-left: 5%;
  margin-top: 10%;
  padding: 30px;
`
export const Header = styled.div`
  margin-bottom: 8%;
  & {
    span {
      margin-left: 8%;
    }
  }
`

export const Address = styled.div`
  display: flex;
  flex-wrap: wrap;

  & {
    h5 {
      margin-right: 10%;
    }
  }
`
export const ShippongForm = styled.div`
  display: flex;

  & {
    p {
      color: #707070;
      font-size: 13px;
    }
  }
`

export const ShippingOpt = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  & {
    div {
      display: flex;
      align-items: center;
      margin-bottom: 8%;
    }
  }
`

export const ShippingTo = styled.div`
  font-size: 13px;
  color: #707070;
  margin: 8% 0 10% 0;

  & {
    span {
      font-weight: 600;
    }
  }
`

export const ChangeAddr = styled.div`
  display: flex;
  flex-wrap: wrap;
  & {
    p {
      width: 100%;
      font-weight: 600;
      color: #000;
      font-size: 14.5px;
    }
  }
`

export const Select = styled.select``
export const Input = styled.input``
export const AddrToUpdate = styled.div`
  flex-direction: column;
  margin-top: 15%;
  width: 100%;

  ${Select}, ${Input} {
    margin-bottom: 3%;
    display: block;
    font-size: 14px;
    color: #929292;
    height: 50px;
    width: 60%;
    line-height: 50px;
    padding: 0;
    font-family: inherit;
    background: transparent;
    border: 1px solid #e1e1e1;
    border-radius: 0;
    box-sizing: border-box;
    cursor: pointer;
    transition: 0.5s;

    &:focus {
      transition: 0.5s;
      border-color: #4a4747;
    }
  }
`

export const Total = styled.div`
  margin-top: 15%;
  width: 100%;

  & {
    p {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5%;
    }
    button {
      width: 100%;
    }
  }
`
