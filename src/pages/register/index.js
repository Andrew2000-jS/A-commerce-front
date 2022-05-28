import Form from 'components/Basics/Form'

export default function index() {
  const output = [
    { label: 'Name', type: 'text' },
    { label: 'Email', type: 'text' },
    { label: 'Password', type: 'password' }
  ]

  return (
    <Form
      title="SINGUP"
      inputs={output}
      subTitle="Do you have an account?"
      buttonText="Sing Up"
      href="/login"
      linkTitle="Log In"
    />
  )
}
