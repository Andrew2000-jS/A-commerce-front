import Modal from 'components/Basics/Modal'
import Preview from 'components/Modals/Preview'

import useToggle from 'hooks/useToggle'

import {
  CardContainer,
  CardImg,
  CardDescription,
  CartIcon
} from 'style/components/CardStyles'

export default function index({ title, price, src }) {
  const [toggle, change, setToggle] = useToggle()

  return (
    <>
      <CardContainer>
        <CardImg>
          <img src="/Test3.jpg" alt="" />
        </CardImg>
        <CardDescription>
          <p>Test title</p>
          <p>$160</p>
          <button onClick={() => change()}>Quick Look</button>
          <p>
            <CartIcon /> ADD TO CART
          </p>
        </CardDescription>
      </CardContainer>

      {toggle && (
        <Modal close={() => setToggle()} open={toggle}>
          <Preview />
        </Modal>
      )}
    </>
  )
}
