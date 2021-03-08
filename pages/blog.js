import Layout from '../components/Layout';
import Link from 'next/link';
import post from './post/[title]';


const PostLink = ({ title }) => (
   <li>
      <Link as="" href={{ pathname: '/post/[title]', query: {title : title} }}>
         <a>{ title }</a>
      </Link>
   </li>
);

const blog = () => (
   <Layout title="Blog">
      <ul>
         <PostLink title="React" />
         <PostLink title="Angular" />
         <PostLink title="Vue" />
         <li>
            <Link as="next-post" href={{ pathname: '/post/[title]', query: {title : 'Next JS'} }}>
               <a>Next JS</a>
            </Link>
         </li>
      </ul>
   </Layout>
);

export default blog;