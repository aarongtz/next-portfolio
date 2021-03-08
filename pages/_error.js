import Layout from '../components/Layout';

const errorView = ({ statusCode }) => (
   <Layout title="Error!">
      { statusCode ? `Could not load your data: ${statusCode}`  
         : `Couldnt get that page, sorry!`
      }
   </Layout>
)

export default errorView;