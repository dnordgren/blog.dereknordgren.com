import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <>
      <Layout home={false}>
        <Head>
          <title>First Post | Derek Nordgren's Blog</title>
        </Head>
        <h1>First Post</h1>
        <h2>Eventually I'll add something here</h2>
      </Layout>
    </>
  )
}
