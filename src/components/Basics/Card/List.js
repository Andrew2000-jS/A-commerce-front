import Card from './index'
import useToggle from 'hooks/useToggle'
import {
  ListContainer,
  CategoriesWrapper,
  Ul
} from 'style/components/ListStyles'
const CATEGORIES = ['ALL', 'HOME DECOR', 'LIGHTING', 'VASES', 'BASICS']

export default function List() {
  const [toggle, change] = useToggle(true)

  return (
    <>
      <CategoriesWrapper>
        <p onClick={() => change()}>CATEGORIES</p>

        {toggle &&
          CATEGORIES.map((category) => (
            <Ul key={category} isDown={toggle}>
              <li>{category}</li>
            </Ul>
          ))}
      </CategoriesWrapper>

      <ListContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ListContainer>
    </>
  )
}
