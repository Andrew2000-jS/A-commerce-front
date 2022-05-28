import useScrollUp from 'hooks/useScrollUp'
import { Arrow, ArrowContainer } from 'style/basics/ScrollTopStyles'

export default function ScrollTop() {
  const { top, scrollUp } = useScrollUp()

  return (
    <>
      {top && (
        <ArrowContainer onClick={scrollUp}>
          <Arrow />
        </ArrowContainer>
      )}
    </>
  )
}
