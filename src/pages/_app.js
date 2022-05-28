import Theme from 'style/theme'
import ScrollTop from 'components/Basics/ScrollTop'

const myApp = ({ Component, pageProps }) => {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
        <ScrollTop />
      </Theme>
    </>
  )
}

export default myApp
