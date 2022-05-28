import styled from 'styled-components'

export const ButtonElement = styled.button`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize};
  border: none;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  font-family: 'Catamaran', sans-serif;
  cursor: pointer;
  transition: all 0.5s ease-out;
  padding: ${(props) => props.padding};

  @media only ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    font-size: ${(props) => props.fontMd};
  }

  &:hover {
    background: ${(props) => props.theme.colors.hover};
    transition: all 0.5s ease-out;
  }
`
