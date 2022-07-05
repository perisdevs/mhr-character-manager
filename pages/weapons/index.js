import Link from 'next/link';
import Layout from '../../components/layout';
import WeaponDisplayRows from '../../components/weaponDisplayRows';
import { requestJSONObject } from '../../lib/requests';

export async function getServerSideProps() {
    let weapons = await requestJSONObject('localhost', 3001, '/weapons');

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
