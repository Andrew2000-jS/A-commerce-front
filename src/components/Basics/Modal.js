import { createPortal } from 'react-dom'
import { Container, Content, Close } from 'style/basics/ModalStyles'

export default function Modal({ open, close, children }) {
  if (!open) return null

  return createPortal(
    <>
      <Container>
        <Content>
          <Close onClick={close} />
          <div>{children}</div>
        </Content>
      </Container>
      )
    </>,
    document.getElementById('portal')
  )
}
