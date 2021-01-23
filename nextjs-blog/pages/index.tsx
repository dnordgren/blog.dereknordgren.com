import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Personal Introduction]</p>
        <p>
          Check out my first post - {' '}
          <Link href="/posts/first-post">
            <a>here</a>
          </Link>
        </p>
      </section>
    </Layout>
  )
}
