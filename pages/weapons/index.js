import Link from 'next/link';
import Layout from '../../components/layout';
import WeaponDisplayRows from '../../components/weaponDisplayRows';
import { queryExternalAPI, requestJSONObject } from '../../lib/requests';

export async function getServerSideProps() {
    let weapons = await queryExternalAPI('/weapons?pageSize=1000');

    return {
        props: {
            weapons: weapons,
        },
    };
}

export default function Home(props) {

  return (
    <Layout>
        <WeaponDisplayRows weapons={props.weapons} />
    </Layout>
  );
}
