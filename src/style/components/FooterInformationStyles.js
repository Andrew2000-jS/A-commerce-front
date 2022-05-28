import styled from 'styled-components'
import { FiArrowRight as Arr } from '@react-icons/all-files/fi/FiArrowRight'

export const InfoContainer = styled.div`
  margin-top: 10%;
  padding-top: 5%;
  display: flex;
  justify-content: space-around;

  ul {
    list-style: none;
    line-height: 30px;
    font-size: 14px;
    cursor: pointer;
  }

  h3 {
    @media ${(props) => props.theme.breakpoints.sm} {
      margin-top: 30px;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    margin-left: 15%;
  }
`

export const Arrow = styled(Arr)`
  display: none;
`
export const Li = styled.li`
  transition: 0.5s;
  display: flex;
  align-items: center;

  &:hover {
    transition: 0.5s;
    color: ${(props) => props.theme.colors.hover};
    transform: translate(5px);

    ${Arrow} {
      display: block;
    }
  }
`
