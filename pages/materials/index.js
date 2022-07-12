import Layout from '../../components/layout';
import MaterialDisplayRows from '../../components/materialDisplayRow';
import { queryExternalAPI, requestJSONObject } from '../../lib/requests';

export async function getServerSideProps() {
    let materials = await queryExternalAPI('/materials')

    return {
        props: {
            materials: materials,
        },
    };
}

export default function Home(props) {
    return (
        <Layout>
            <MaterialDisplayRows materials={props.materials} />
        </Layout>
    )
}