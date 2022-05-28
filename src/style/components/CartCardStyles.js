import styled from 'styled-components'

export const CartCard = styled.div`
  width: 100%;
  border-bottom: 1px solid #ccc;
  margin-bottom: 4%;
  & {
    div:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
  }
`

export const ApplyCoupon = styled.div`
  width: 100%;
  border-top: 1px solid #dcd9e3;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & {
    div {
      background-color: #f3f3f3;
      height: 100%;
    }
    input,
    button {
      border: none;
      background-color: #00000000;
      height: 100%;
    }

    button {
      cursor: pointer;
      font-size: 12px;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    & {
      justify-content: center;
      button {
        font-size: 10px;
        width: 80px;
      }

      .btn {
        display: none;
      }
    }
  }
`
export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  width: 45%;

  & {
    img {
      height: 100px;
      width: 100px;
    }

    p {
      font-weight: 500;
    }

    @media ${(props) => props.theme.breakpoints.md} {
      img {
        display: none;
      }
    }
  }
`

export const Close = styled.p`
  color: #aba7a7;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transition: 0.5s;
    color: #848689;
  }
`

export const CardDescription = styled.div`
  display: flex;
  align-items: center;
  width: 55%;
  gap: 15%;
  & {
    span {
      color: #929292;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    & {
      span:nth-child(1) {
        display: none;
      }

      span {
        margin-left: 45%;
      }
    }
  }
`
