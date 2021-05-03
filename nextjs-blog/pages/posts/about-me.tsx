import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <>
      <Layout home={false}>
        <Head>
          <title>About Derek | Derek Nordgren's Blog</title>
        </Head>
        <h1>👋 Hi, I'm Derek.</h1>
        <h2>
          I'm an Engineering Manager at{' '}
          <a
            href="https://www.hudl.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hudl
          </a>{' '}
          in London.
        </h2>
        <p>
          I currently lead Hudl's Cloud Infrastructure team, which is
          responsible for building and maintaining the AWS infrastructure that
          powers Hudl.com.
        </p>
        <p>
          Hudl's a cloud-native company. We're using infra-as-code (Terraform,
          Packer), containers (ECS now - k8s soon) and other automation
          (Lambdas, Python, Chef) to empower our development teams to move fast
          and build great products on top of the latest and greatest from AWS.
        </p>
        <p>
          We're hiring -{' '}
          <a
            href="https://www.hudl.com/jobs"
            target="_blank"
            rel="noopener noreferrer"
          >
            join us
          </a>{' '}
          or{' '}
          <a
            href="mailto:derek@dereknordgren.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            get in touch
          </a>
          .
        </p>
        {/* Write about infrastructure, management, product management here*/}
        <h2>My background is in software engineering.</h2>
        <p>
          Before infrastructure, I was a senior full-stack software engineer. I
          enjoy designing software architectures and products for scalability
          and performance. My preferred stack involves Docker-ized .NET Core
          running on AWS, React written in TypeScript, GraphQL and MongoDB. That
          said, I{' '}
          <a
            href="https://nested.substack.com/p/short-fat-engineers-are-undervalued"
            target="_blank"
            rel="noopener noreferrer"
          >
            prefer breadth to depth
          </a>{' '}
          and love learning new things.
        </p>
        <p>
          I pride myself on being a "product" generalist. I'm energized by
          working with great, cross-functional teams to solve business and
          engineering challenges. I'm passionate about driving continuous
          improvement and bringing great products to market at high velocity
          with low risk.
        </p>
        {/* Write about engineering here*/}
        <h2>
          Before that, I co-founded{' '}
          <a
            href="https://www.facebook.com/ConciseResearchGroup/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CRG
          </a>
          .
        </h2>
        <p>
          I was the co-founder and Chief Technology Officer of a small start-up,
          Concise Research Group (CRG). I led our product team in designing and
          building web-based surveying and reporting tools which helped law
          enforcement departments build better relationships with the
          communities they serve.
        </p>
        <p>
          Our products applied the latest best practices in procedural justice
          research to enable law enforcements leaders to make data-driven
          process changes that save money, reduce use of force incidents and{' '}
          <strong>save civilian and officer lives</strong>. Our products were
          used by multiple law enforcement departments across the U.S.
        </p>
        {/* Write about entrepreneurship, enterprise sales here*/}
      </Layout>
    </>
  );
}
