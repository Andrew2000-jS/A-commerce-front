import styled from 'styled-components'
import { IoMdArrowDropdown } from '@react-icons/all-files/io/IoMdArrowDropdown'

export const Arrow = styled(IoMdArrowDropdown)``

export const Container = styled.div`
  width: 100%;
  margin-top: 3%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Article = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  & {
    ul {
      list-style: none;
    }
  }
`

export const Categories = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 0px 10px;
  font-size: 13px;
`

export const Filter = styled.div`
  display: flex;
  & {
    p {
      font-size: 13px;
    }
  }
`
