import styled from 'styled-components'
import { AiFillStar } from '@react-icons/all-files/ai/AiFillStar'
import { MdFavorite as Icon } from '@react-icons/all-files/md/MdFavorite'

export const Star = styled(AiFillStar)`
  color: #ebbc00;
`
export const Fav = styled(Icon)`
  font-size: 19px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  background-color: #fff;
  border-radius: 5px;

  @media only ${(props) => props.theme.breakpoints.md} {
    & {
      overflow-y: scroll;
      height: 500px;
    }
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  height: 100%;

  @media only ${(props) => props.theme.breakpoints.md} {
    & {
      grid-template-columns: repeat(1, 100%);
    }
  }
`
export const ImgWrapper = styled.div`
  width: 50%;

  @media only ${(props) => props.theme.breakpoints.md} {
    & {
      width: 100%;
    }
  }
`

export const Img = styled.img`
  height: 100%;
  border-radius: 5px;

  @media only ${(props) => props.theme.breakpoints.md} {
    & {
      width: 100%;
      height: 100%;
    }
  }
`

export const Description = styled.div`
  width: 50%;
  padding: 60px;

  & {
    width: 100%;
  }
`

export const Header = styled.div`
  margin-bottom: 35px;
  line-height: 45px;

  & {
    h1 {
      font-size: 30px;
      font-weight: 400;
    }

    p {
      font-size: 25px;
      font-weight: 200;
    }
  }
`

export const Body = styled.div`
  margin-bottom: 50px;

  & {
    p {
      font-size: 14px;
      line-height: 25px;
      color: ${(props) => props.theme.colors.hover};
      margin-bottom: 40px;
    }
  }
`
export const AddWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  @media only ${(props) => props.theme.breakpoints.md} {
    & {
      flex-direction: column;
    }

    input {
      margin-bottom: 10px;
    }
  }
`

export const Footer = styled.div`
  display: flex;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transition: 0.5s;
    color: #f51720;
  }

  @media only ${(props) => props.theme.breakpoints.md} {
    & {
      font-size: 13px;
    }
  }
`
