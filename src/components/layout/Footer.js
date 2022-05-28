import {
  Container,
  GitIcon,
  TwIcon,
  IgIcon,
  SocialWrapper,
  P
} from 'style/components/FooterStyles'
import Info from 'components/FooterInformation'

export default function Footer({ isBlack }) {
  const color = isBlack ? '#fff' : '#000'
  const background = isBlack ? '#000' : '#fff'

  return (
    <div style={{ color, background }}>
      <Info />
      <Container>
        <div>
          <p>© 2021 Qode Interactive, All Rights Reserved</p>
        </div>

        <SocialWrapper>
          <P>Follow Us</P>
          <span>
            <GitIcon />
          </span>
          <span>
            <TwIcon />
          </span>
          <span>
            <IgIcon />
          </span>
        </SocialWrapper>
      </Container>
    </div>
  )
}
