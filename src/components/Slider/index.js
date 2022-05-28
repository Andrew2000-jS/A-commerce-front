import {
  Container,
  Slider,
  Slide,
  ImageContainer,
  AutoNav,
  B1,
  B2,
  B3,
  Nav,
  Label,
  Input1,
  Input2,
  Input3,
  Firts
} from 'style/components/SlliderStyles'

export default function index() {
  let counter = 1

  if (typeof window !== 'undefined') {
    setInterval(() => {
      window.document.getElementById('radio' + counter).checked = true
      counter++
      if (counter > 3) {
        counter = 1
      }
    }, 5000)
  }

  return (
    <Container>
      <Slider>
        <Slide>
          <Input1 type="radio" name="radio-btn" id="radio1" />
          <Input2 type="radio" name="radio-btn" id="radio2" />
          <Input3 type="radio" name="radio-btn" id="radio3" />

          <Firts>
            <img src="/shopping.jpg" alt="" />
          </Firts>
          <ImageContainer>
            <img src="/test1.jpg" alt="" />
          </ImageContainer>
          <ImageContainer>
            <img src="/test2.jpg" alt="" />
          </ImageContainer>

          <AutoNav>
            <B1></B1>
            <B2></B2>
            <B3></B3>
          </AutoNav>
        </Slide>

        <Nav>
          <Label htmlFor="radio1"></Label>
          <Label htmlFor="radio2"></Label>
          <Label htmlFor="radio3"></Label>
        </Nav>
      </Slider>
    </Container>
  )
}
