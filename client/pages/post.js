import WPAPI from 'wpapi';

import { Layout } from '../components';
import { endpoint } from '../config';

const wp = new WPAPI({ endpoint });

const Post = ({title, content}) => (
    <Layout>
        <h1>{title.rendered}</h1>
        <div dangerouslySetInnerHTML={{
            __html: content.rendered
        }} />
    </Layout>
);

Post.getInitialProps = async function(context) {
    const { slug } = context.query;
    
    try {
        const post = await wp.posts().slug(slug);
        return post[0];
    } catch(err) {
        console.error(err);
    }
}

export default Post;