import Form from 'components/Basics/Form'

export default function index() {
  const output = [
    { label: 'Email', type: 'text' },
    { label: 'Password', type: 'password' }
  ]

  return (
    <Form
      title="LOGIN"
      inputs={output}
      subTitle="Firts time on Andrew commerce?"
      buttonText="Log In"
      href="/register"
      linkTitle="Sing Up"
    />
  )
}
