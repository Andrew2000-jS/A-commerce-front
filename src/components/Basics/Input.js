import {
  InputElement,
  InputData,
  Label,
  ContentName
} from 'style/basics/InputStyles'

export default function Input({ labelName, type }) {
  return (
    <InputData>
      <InputElement type={type} />
      <Label>
        <ContentName>{labelName}</ContentName>
      </Label>
    </InputData>
  )
}
