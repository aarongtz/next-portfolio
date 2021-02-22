import Image from 'next/image'


const About = () => (
   <div>
      <h1>About</h1>
      <p>A Javascript programmer</p>
      <Image
         priority
         src="/static/js-logo.png"
         width={250}
         height={250}
         alt="Javascript Logo"
      />
   </div>
)

export default About;