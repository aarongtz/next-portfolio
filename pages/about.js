import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout';

const About = () => (
   <Layout title="About">
      
      <Link href="/">
         <a>Go to home</a>
      </Link>
      <p>A Javascript programmer</p>
      <Image
         priority
         src="/static/js-logo.png"
         width={250}
         height={250}
         alt="Javascript Logo"
      />
   </Layout>
)

export default About;