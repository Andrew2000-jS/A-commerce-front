import NumberInput from 'components/Basics/NumberInput'
import React from 'react'
import {
  CartCard,
  ImgContainer,
  CardDescription,
  ApplyCoupon,
  Close
} from 'style/components/CartCardStyles'
import { BsGift } from '@react-icons/all-files/bs/BsGift'

export default function index() {
  return (
    <CartCard>
      <div>
        <ImgContainer>
          <Close>x</Close>
          <img src="Test3.jpg" alt="test" />
          <p>Title test</p>
        </ImgContainer>
        <CardDescription>
          <span>$15</span>
          <NumberInput width="50%" display="none" />
          <span>$15</span>
        </CardDescription>
      </div>

      <ApplyCoupon>
        <div>
          <BsGift style={{ marginRight: '5%' }} />
          <input type="text" placeholder="Coupon code" />
          <button>APPLY COUPON</button>
        </div>

        <button style={{ marginRight: '30%' }} className="btn">
          UPDATE CART
        </button>
      </ApplyCoupon>
    </CartCard>
  )
}
