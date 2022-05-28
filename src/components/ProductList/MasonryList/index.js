import React from 'react'
import {
  Arrow,
  Article,
  Categories,
  Container,
  Content,
  Filter
} from 'style/components/MasoListStyles'
import List from './MasoList'

const categories = ['ALL', 'ACCESSORIES', 'DECORATION', 'HARDWOODS', 'FANCIES']

export default function index() {
  return (
    <Container>
      <Content>
        <Article>
          <Categories>
            {categories.map((category, index) => (
              <ul key={index}>
                <li>{category}</li>
              </ul>
            ))}
          </Categories>
          <Filter>
            <p>FILTER</p> <Arrow />
          </Filter>
        </Article>
        <List />
      </Content>
    </Container>
  )
}
