import { Container, Next, Prev } from 'style/basics/NumberInputStyles'
import useConunter from 'hooks/useConunter'

export default function NumberInput({ width, height, display }) {
  const { count, handleUp, handleDown } = useConunter()
  return (
    <Container width={width} height={height} display={display}>
      <Next onClick={handleUp} />
      <Prev onClick={handleDown} />
      <div>
        <span>Quantity</span>
        <span>{count}</span>
      </div>
    </Container>
  )
}
