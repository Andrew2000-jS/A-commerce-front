import {
  AddWrapper,
  Body,
  Container,
  Content,
  Description,
  Footer,
  Header,
  Img,
  ImgWrapper,
  Star,
  Fav
} from 'style/components/PreviewStyles'

import Button from 'components/Basics/Button'
import NumberInput from 'components/Basics/NumberInput'

export default function Preview() {
  return (
    <Container>
      <Content>
        <ImgWrapper>
          <Img src="/Test3.jpg" alt="" />
        </ImgWrapper>
        <Description>
          <Header>
            <h1>Test title</h1>
            <p>$160</p>
          </Header>
          <Body>
            <span>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
              ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus
              et magnis dis parturient montes nascetur ridiculus mus. Vestibulum
              ultricies aliquam convallis.
            </p>

            <AddWrapper>
              <NumberInput width="50%" height="50px" />
              <Button
                text="ADD TO CART"
                width="200px"
                padding="8px 55px"
                fontSize="13px"
                fontMd="8px"
              />
            </AddWrapper>
          </Body>
          <Footer>
            <span>
              <Fav />
            </span>
            ADD TO WISHLIST
          </Footer>
        </Description>
      </Content>
    </Container>
  )
}
