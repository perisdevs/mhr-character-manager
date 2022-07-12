import DecorationDisplayRows from '../../components/decorationDisplayRows';
import Layout from '../../components/layout';
import { queryExternalAPI, requestJSONObject } from '../../lib/requests';

export async function getServerSideProps() {
    let decorations = await queryExternalAPI('/decorations');

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