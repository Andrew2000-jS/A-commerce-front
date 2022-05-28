import styled from 'styled-components'

export const Content = styled.div`
  flex-direction: row;
  width: 90%;
`

export const Container = styled.div`
  width: 100%;

  &,
  ${Content} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

export const Banner = styled.div`
  width: 100%;
  margin-bottom: 5%;

  & {
    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }

    h1 {
      position: absolute;
      top: 200px;
      z-index: 100;
      left: 37%;
      font-size: 40px;
      color: #fff;
    }
  }
`
