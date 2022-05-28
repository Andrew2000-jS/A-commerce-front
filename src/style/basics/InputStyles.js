import styled from 'styled-components'

export const InputData = styled.div`
  position: relative;
  height: 60px;
  overflow: hidden;
`

export const Label = styled.label`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 372px;
  height: 100%;
  pointer-events: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.hover};
  border-radius: 5px;
  color: ${(props) => props.theme.colors.black};

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0px;
    width: 372;
    height: 100%;
    border-bottom: 1px solid ${(props) => props.theme.colors.hover};
    border-radius: 5px;
    transform: translateX(-100%);
    transition: all 0.3s ease;
  }

  @media only ${(props) => props.theme.breakpoints.md} {
    width: 100%;
  }
`

export const ContentName = styled.span`
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding-bottom: 5px;
  transition: all 0.3s ease;
`

export const InputElement = styled.input`
  width: 372px;
  height: 100%;
  color: ${(props) => props.theme.colors.black};
  padding-top: 20px;
  border: none;
  border-radius: 5px;

  &:focus {
    outline: none;
  }

  &:focus + ${Label} ${ContentName}, &:valid ${Label} ${ContentName} {
    transform: translateY(-150%);
    font-size: 14px;
    left: 0px;
    color: ${(props) => props.theme.colors.black};
  }

  ${InputData} &:focus + ${Label}::after, ${InputData} &:valid + ${Label}::after {
    transform: translateX(0%);
  }
`
