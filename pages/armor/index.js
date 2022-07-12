import ArmorDisplayRows from '../../components/armorDisplayRows';
import Layout from '../../components/layout';
import { queryExternalAPI, requestJSONObject } from '../../lib/requests';

export async function getServerSideProps() {
  let armor = await queryExternalAPI('/armor')

  return {
    props: {
      armor: armor,
    },
  };
}

export default function Home(props) {
  return (
    <Layout>
      <ArmorDisplayRows armor={props.armor} />
    </Layout>
  );
}
