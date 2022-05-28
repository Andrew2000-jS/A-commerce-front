import dynamic from 'next/dynamic'
import Layout from 'components/layout'
import List from 'components/Basics/Card/List'

const Slider = dynamic(() => import('components/Slider'), { ssr: false })

export default function Home() {
  return (
    <>
      <Layout>
        <Slider />
        <List />
      </Layout>
    </>
  )
}
