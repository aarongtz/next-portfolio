import Image from 'next/image'
import Layout from '../components/Layout';
import { Component } from 'react';
import Error from './_error';

class About extends Component {

   static async getInitialProps(){
      const res = await fetch('https://api.github.com/users/aarongtz');
      const statusCode = res.status > 200 ? res.status : false;
      const data = await res.json();
         // .then(res => res.json())
         // .then(data => {
         //    console.log(data);
         // });

      return { user: data, statusCode };
   }

   // componentDidMount() {
   //    fetch('https://api.github.com/users/aarongtz')
   //       .then(res => res.json())
   //       .then(data => {
   //          this.setState({
   //             user: data
   //          });
   //       });
   // }

   render() {
      const { user, statusCode } = this.props;

      if(statusCode){
         return <Error statusCode={statusCode} />
      }

      return (
         <Layout title="About">
            <p>{ user.name }</p>
            <Image
               priority
               src={user.avatar_url}
               width={250}
               height={250}
               alt="Aarón"
            />
         </Layout>
      )
   }


}

export default About;