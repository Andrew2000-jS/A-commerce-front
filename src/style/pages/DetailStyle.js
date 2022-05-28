import styled from 'styled-components'
import { AiFillStar } from '@react-icons/all-files/ai/AiFillStar'

export const Star = styled(AiFillStar)`
  color: #ebbc00;
`

export const Container = styled.div`
  padding: 0 80px;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0 8%;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`

export const ImgWrapper = styled.div`
  img {
    max-width: 100%;
    min-width: 40%;
  }
`

export const Description = styled.div`
  align-self: flex-start;
  width: 35%;
  margin-left: 5%;

  & {
    div:nth-child(1) {
      margin-bottom: 15%;
    }

    p {
      margin-top: 3%;
      font-size: 15px;
      line-height: 25px;
      color: #929292;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    margin-left: 0;
  }
`

export const H2 = styled.h2`
  &:nth-child(1) {
    font-weight: 400;
  }
  font-weight: 300;
`
export const Inputs = styled.div`
  margin-top: 10%;
  display: flex;
  flex-wrap: wrap;

  & {
    div:nth-child(1) {
      margin-bottom: 5px;
    }
  }
`

export const AddToFav = styled.div`
  display: flex;
  margin: 8% 0;
  transition: 0.5s;
  font-size: 12px;
  width: 35%;
  font-weight: 600;

  &:hover {
    transition: 0.5s;
    cursor: pointer;
    color: #f51720;
  }

  & {
    span {
      margin-right: 5px;
    }
  }
`

export const Category = styled.div`
  display: flex;
  font-size: 13px;

  & {
    ul {
      list-style: none;
      line-height: 25px;
    }

    span {
      color: ${(props) => props.theme.colors.hover};
      transition: 0.2s;
      cursor: pointer;
      &:hover {
        transition: 0.2s;
        color: #000;
      }
    }
  }
`

export const List = styled.ul`
  width: 48%;
  list-style: none;
  display: flex;
  margin: 5% 0 0 8.5%;
  flex-wrap: wrap;

  @media only ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    margin: 15% 0 20% 0;
  }
`

export const Li = styled.li`
  border: 1px solid #c1bdbd;
  padding: 15px 20px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;

  @media only ${(props) => props.theme.breakpoints.md} {
    text-align: center;
    width: 100%;
  }

  transition: 0.5s;
  &:hover {
    background: #000;
    color: #fff;
    transition: 0.5s;
  }

  &:active {
    background-color: ${(props) => props.theme.colors.hover};
  }
`

export const OtherInfo = styled.div`
  border-top: 1px solid #e7e7e7;
  padding: 5% 0 0 0;
  font-size: 14px;

  & {
    div:nth-child(1) {
      padding-left: 8%;
    }

    div:nth-child(2) {
      margin-top: 1.5%;
      line-height: 25px;
    }
    p,
    li {
      color: ${(props) => props.theme.colors.hover};
    }
  }
`
