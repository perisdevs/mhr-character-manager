import DecorationDisplayRows from '../../components/decorationDisplayRows';
import Layout from '../../components/layout';
import { requestJSONObject } from '../../lib/requests';

export async function getServerSideProps() {
    let decorations = await requestJSONObject('localhost', 3001, '/decorations');

    return {
        props: {
            decorations: decorations,
        },
    };
}

export default function Home(props) {

    return (
        <Layout>
            <DecorationDisplayRows decorations={props.decorations} />
        </Layout>
    );
}