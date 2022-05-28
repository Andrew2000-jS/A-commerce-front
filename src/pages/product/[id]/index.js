import Button from 'components/Basics/Button'
import NumberInput from 'components/Basics/NumberInput'
import Layout from 'components/layout'
import useChangeInfo from 'hooks/useChangeInfo'
import { MdFavorite as Fav } from '@react-icons/all-files/md/MdFavorite'

import {
  Container,
  Content,
  ImgWrapper,
  Description,
  Star,
  H2,
  Inputs,
  Li,
  List,
  AddToFav,
  Category,
  OtherInfo
} from 'style/pages/DetailStyle'

const LIST_ITEMS = ['DESCRIPTION', 'ADDITIONAL INFORMATION', 'REVIEWS']

export default function index() {
  const { state, setShow } = useChangeInfo('Test')

  const liMap = LIST_ITEMS.map((item, index) => (
    <Li key={index} onClick={() => setShow(item.toLowerCase())}>
      {item}
    </Li>
  ))

  const STATE_DICTIONARY = {
    description: state.description && <p>{state.description}</p>,
    'additional information': Object.entries(state.additional_information) && (
      <ul style={{ listStyle: 'none' }}>
        {Object.entries(state.additional_information).map((item, index) => (
          <li key={index}>{`${item[0]} : ${item[1]}`}</li>
        ))}
      </ul>
    ),
    reviews: state.reviews && <h1>{state.reviews}</h1>
  }

  const toShow = STATE_DICTIONARY[state.show]

  return (
    <>
      <Layout>
        <Container>
          <Content>
            <ImgWrapper>
              <img src="/Test3.jpg" alt="test img" />
            </ImgWrapper>
            <Description>
              <div>
                <H2>TEST TITLE</H2>
                <H2>$160</H2>
              </div>
              <div>
                <span>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
                  ullamcorper leo, eget euismod orci. Cum sociis natoque
                  penatibus et magnis dis parturient montes nascetur ridiculus
                  mus. Vestibulum ultricies aliquam convallis.
                </p>
              </div>
              <Inputs>
                <NumberInput height="20px" width="50%" />
                <Button
                  text="ADD TO CART"
                  width="50%"
                  height="50px"
                  padding="8px 55px"
                  fontSize="13px"
                  fontMd="8px"
                />
              </Inputs>

              <AddToFav>
                <span>
                  <Fav />
                </span>
                ADD TO WISHLIST
              </AddToFav>
              <Category>
                <ul>
                  <li>
                    SKU: <span> 007</span>
                  </li>
                  <li>
                    Categories: <span> Home Decor, Vases</span>
                  </li>
                  <li>
                    Tags: <span>Modern, Pottery</span>
                  </li>
                </ul>
              </Category>
            </Description>
          </Content>
          <List>{liMap}</List>
          <OtherInfo>
            <div>
              <h4>{state.show.toUpperCase()}</h4>
              <div>{toShow}</div>
            </div>
          </OtherInfo>
        </Container>
      </Layout>
    </>
  )
}
