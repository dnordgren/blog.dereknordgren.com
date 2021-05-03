import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Engineering Manager at{' '}
          <a href="www.hudl.com" target="_blank" rel="noopener noreferrer">
            Hudl
          </a>
          .
        </p>
      </section>
      <p>
        I lead the Hudl team that builds and maintains the AWS cloud
        infrastructure that powers the world of sport with video and analytics.
      </p>
      <section className={utilStyles.headingMd}>
        <p>
          More about me{' '}
          <Link href="/posts/about-me">
            <a>here</a>
          </Link>
          . Find me on{' '}
          <a
            href="github.com/dnordgren/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          ,{' '}
          <a
            href="www.linkedin.com/in/dereknordgren/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          ,{' '}
          <a
            href="twitter.com/dereknordgren/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          .
        </p>
      </section>
    </Layout>
  );
}
