import useToggle from 'hooks/useToggle'
import Link from 'next/link'

import { Hamburger, Open, Ul, A, CloseIcon } from 'style/components/NavbarStyle'

import { FiMenu } from '@react-icons/all-files/fi/FiMenu'
import { AiOutlineHome as HomeIcon } from '@react-icons/all-files/ai/AiOutlineHome'
import { AiOutlineShoppingCart as ShoppIcon } from '@react-icons/all-files/ai/AiOutlineShoppingCart'
import { BiLogIn } from '@react-icons/all-files/bi/BiLogIn'
import { AiOutlineFolder as FolderIcon } from '@react-icons/all-files/ai/AiOutlineFolder'
import { AiOutlineInbox as ProductIcon } from '@react-icons/all-files/ai/AiOutlineInbox'

function BurgerNav() {
  const [isOpen, setIsOpen] = useToggle()

  return (
    <Hamburger>
      <span onClick={setIsOpen}>
        <FiMenu />
      </span>
      {isOpen && (
        <>
          <Open>
            <div>
              <span onClick={setIsOpen} style={{ position: 'absoulte' }}>
                <CloseIcon />
              </span>
              <Ul>
                <Link href="/">
                  <A>
                    <span>
                      <HomeIcon />
                    </span>
                    Home
                  </A>
                </Link>
                <Link href="/products">
                  <A>
                    <span>
                      <ProductIcon />
                    </span>
                    Products
                  </A>
                </Link>
                <Link href="/">
                  <A>
                    <span>
                      <FolderIcon />
                    </span>
                    Portfolio
                  </A>
                </Link>
                <Link href="/cart">
                  <A>
                    <span>
                      <ShoppIcon />
                    </span>
                    Cart
                  </A>
                </Link>
                <Link href="/login">
                  <A>
                    <span>
                      <BiLogIn />
                    </span>
                    Login
                  </A>
                </Link>
              </Ul>
            </div>
          </Open>
        </>
      )}
    </Hamburger>
  )
}

export default BurgerNav
