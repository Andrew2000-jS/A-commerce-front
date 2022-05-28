import styled, { keyframes } from 'styled-components'
import { GrFormClose } from '@react-icons/all-files/gr/GrFormClose'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background-color: rgba(8, 8, 8, 0.7);
  z-index: 100000000000000000000000;
`

export const Content = styled.div`
  position: absolute;
  left: 13%;
  width: 100%;
`

export const Close = styled(GrFormClose)`
  position: relative;
  bottom: -30px;
  left: 71%;
  cursor: pointer;
`
