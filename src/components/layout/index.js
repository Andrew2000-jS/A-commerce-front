import Footer from './Footer'
import Navbar from './Navbar/Navbar'

export default function index({ children, isBlack = false }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer isBlack={isBlack} />
    </>
  )
}
