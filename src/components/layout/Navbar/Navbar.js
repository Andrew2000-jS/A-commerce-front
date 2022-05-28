import Link from 'next/link'

import {
  Header,
  Nav,
  Li,
  Ul,
  A,
  BrandLink,
  Span,
  LogIcon,
  SearchIcon
} from 'style/components/NavbarStyle'
import BurgerNav from './BurgerNav'

export default function Navbar() {
  return (
    <>
      <Header>
        <Nav>
          <Ul>
            <Li>
              <Link href="/">
                <A>HOME</A>
              </Link>
            </Li>
            <Li>
              <Link href="/products">
                <A>PRODUCTS</A>
              </Link>
            </Li>
            <Li>
              <Link href="/About">
                <A>PORTFOLIO</A>
              </Link>
            </Li>
          </Ul>
        </Nav>
        <Link href="/">
          <BrandLink>A-COMMERCE</BrandLink>
        </Link>

        <Nav>
          <Ul>
            <Li>
              <Link href="/cart">
                <A>
                  CART <Span>($0)</Span>
                </A>
              </Link>
            </Li>
            <Li>
              <Link href="/login">
                <A>
                  <span>
                    <LogIcon />
                  </span>
                  LOGIN
                </A>
              </Link>
            </Li>
            <Li>
              <span>
                <SearchIcon />
              </span>
            </Li>
          </Ul>
        </Nav>

        <BurgerNav />
      </Header>
    </>
  )
}
