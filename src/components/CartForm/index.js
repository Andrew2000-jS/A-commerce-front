import Button from 'components/Basics/Button'
import useToggle from 'hooks/useToggle'
// import { PayPalButton } from 'react-paypal-button-v2'

import {
  Container,
  Address,
  Header,
  ShippingOpt,
  ShippingTo,
  ChangeAddr,
  Total,
  DownIcon,
  AddrToUpdate,
  Select,
  Input,
  ShippongForm
} from 'style/components/CartFormStyles'

export default function index() {
  const [toggle, change] = useToggle()
  // const [isTrue, setIsTrue] = useToggle()

  return (
    <Container>
      <h2>CART TOTALS</h2>
      <Header>
        <h5>
          SUBTOTAL <span>$15</span>
        </h5>
      </Header>
      <Address>
        <div>
          <ShippongForm>
            <div>
              <h5>SHIPPING</h5>
            </div>
            <ShippingOpt>
              <div>
                <input type="radio" name="" id="" />
                <p>Free shipping</p>
              </div>
              <div>
                <input type="radio" name="" id="" />
                <p>Local pickup</p>
              </div>
              <div>
                <input type="radio" name="" id="" />
                <p>Flat Rate: $10</p>
              </div>
            </ShippingOpt>
          </ShippongForm>

          <ShippingTo>
            <div>
              <p>
                Shipping to <br />
                <span>Venezuela</span>
              </p>
            </div>
          </ShippingTo>
          <ChangeAddr>
            <div onClick={() => change()} style={{ cursor: 'pointer' }}>
              <p>CHANGE ADDRESS</p>
              <DownIcon />
            </div>
            {toggle && (
              <div style={{ width: '100%' }}>
                <AddrToUpdate>
                  <Select name="" id="">
                    <option value="1">Venezuela</option>
                    <option value="2">Test</option>
                    <option value="3">Test</option>
                    <option value="4">Test</option>
                  </Select>
                  <Select name="" id="">
                    <option value="1">Venezuela</option>
                    <option value="2">Test</option>
                    <option value="3">Test</option>
                    <option value="4">Test</option>
                  </Select>
                  <Input type="text" placeholder="Twon / City" />
                  <Input type="text" placeholder="Postcode / ZIP" />
                </AddrToUpdate>
              </div>
            )}
          </ChangeAddr>
        </div>
        <Total>
          <p>
            TOTAL <span>$390</span>
          </p>
          <Button text="PROCEED TO CHECKOUT" width="100%" height="45px" />
          {/* <PayPalButton /> */}
        </Total>
      </Address>
    </Container>
  )
}
