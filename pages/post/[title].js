import Layout from '../../components/Layout';

const post = ({ query }) => (
   <Layout title={query.title}>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet congue elit, nec sodales arcu. Nulla ut velit scelerisque, cursus metus sed, euismod tortor.
      </p>
   </Layout>
);

post.getInitialProps = ({query}) => {
   return {query};
}

export default post;