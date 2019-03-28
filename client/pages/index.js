import Link from 'next/link';
import WPAPI from 'wpapi';

import { Layout } from '../components';
import { endpoint } from '../config';

const wp = new WPAPI({ endpoint });

const PostLink = ({name, slug}) => (
    <Link
        as={`/p/${slug}`} 
        href={`/post?slug=${slug}`}>
        <a>{name}</a>
    </Link>
);

const Index = (props) => (
    <Layout>
        <h1>Posts</h1>
        <ul> 
            {props.posts.map(({title, slug}) => (
                <li key={slug}>
                    <PostLink slug={slug} name={title.rendered} />
                </li>
            ))}
        </ul>
    </Layout>
);

Index.getInitialProps = async function() {
    try {

        const posts = await wp.posts();
        
        return {
            posts
        };

    } catch(err) {
        console.error(err);
    }
}

export default Index;