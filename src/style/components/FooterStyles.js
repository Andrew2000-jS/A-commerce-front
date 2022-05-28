import styled from 'styled-components'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { AiFillInstagram } from '@react-icons/all-files/ai/AiFillInstagram'

export const GitIcon = styled(FaGithub)``
export const TwIcon = styled(FaTwitter)``
export const IgIcon = styled(AiFillInstagram)``

export const P = styled.p`
  @media only ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5% 0 5%;
  margin-top: 10%;

  p {
    font-size: 12px;
  }
`

export const SocialWrapper = styled.div`
  display: flex;

  span {
    margin-left: 10px;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      transition: 0.5s;
      color: ${(props) => props.theme.colors.hover};
    }
  }
`
