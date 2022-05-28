import { ButtonElement } from 'style/basics/ButtonStyle'

export default function Button({
  text,
  width,
  height,
  padding,
  fontSize,
  fontMd
}) {
  return (
    <ButtonElement
      width={width}
      padding={padding}
      height={height}
      fontSize={fontSize}
      fontMd={fontMd}
    >
      {text}
    </ButtonElement>
  )
}
