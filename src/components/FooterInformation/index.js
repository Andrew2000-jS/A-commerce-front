import {
  InfoContainer,
  Arrow,
  Li
} from 'style/components/FooterInformationStyles'

export default function index() {
  return (
    <InfoContainer>
      <div>
        <h3>CUSTOMER SERVICE</h3>
        <ul>
          <Li>
            <span>
              <Arrow />
            </span>
            Help & Contact Us
          </Li>
          <Li>
            <span>
              <Arrow />
            </span>
            Returns & Refunds
          </Li>
          <Li>
            <span>
              <Arrow />
            </span>
            OnLine Stores
          </Li>
          <Li>
            <span>
              <Arrow />
            </span>
            Terms & Conditions
          </Li>
        </ul>
      </div>
      <div>
        <h3>COMPANY</h3>
        <ul>
          <Li>
            <span>
              <Arrow />
            </span>
            What We Do
          </Li>
          <Li>
            <span>
              <Arrow />
            </span>
            Available Services
          </Li>
          <Li>
            <span>
              <Arrow />
            </span>
            Latest Posts
          </Li>
          <Li>
            <span>
              <Arrow />
            </span>
            FAQs
          </Li>
        </ul>
      </div>
      <div>
        <h3>PROFILE</h3>
        <ul>
          <Li>
            <span>
              <Arrow />
            </span>
            My Account
          </Li>
          <Li>
            <span>
              <Arrow />
            </span>
            Checkout
          </Li>
          <Li>
            <span>
              <Arrow />
            </span>
            Order Tracking
          </Li>
          <Li>
            <span>
              <Arrow />
            </span>
            Help & Support
          </Li>
        </ul>
      </div>
      <div>
        <h3>SOCIAL MEDIA</h3>
        <ul>
          <Li>
            <span>
              <Arrow />
            </span>
            Twitter
          </Li>
          <Li>
            <span>
              <Arrow />
            </span>
            Instagram
          </Li>
          <Li>
            <span>
              <Arrow />
            </span>
            Github
          </Li>
          <Li>
            <span>
              <Arrow />
            </span>
            Linkedin
          </Li>
        </ul>
      </div>
    </InfoContainer>
  )
}
