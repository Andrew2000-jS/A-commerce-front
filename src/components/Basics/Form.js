import Link from 'next/link'

import {
  LogContainer,
  LogForm,
  InputWrapper,
  TitleWrapper,
  P,
  A,
  Logo,
  Icon
} from 'style/basics/FormStyles'
import Input from 'components/Basics/Input'
import Button from 'components/Basics/Button'

export default function index({
  title,
  subTitle,
  linkTitle,
  href,
  buttonText,
  inputs = []
}) {
  return (
    <LogContainer>
      <Link href="/">
        <Logo>
          <Icon />
        </Logo>
      </Link>
      <LogForm>
        <TitleWrapper>{title}</TitleWrapper>
        {inputs.map(({ label, type }, i) => (
          <>
            <InputWrapper key={i}>
              <Input labelName={label} type={type} />
            </InputWrapper>
          </>
        ))}
        <Button text={buttonText} width="372px" height="40px" />

        <P>
          {subTitle}
          <Link href={href}>
            <A>{linkTitle}</A>
          </Link>
        </P>
      </LogForm>
    </LogContainer>
  )
}
