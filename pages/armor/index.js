import ArmorDisplayRows from '../../components/armorDisplayRows';
import Layout from '../../components/layout';
import { requestJSONObject } from '../../lib/requests';

export async function getServerSideProps() {
  let armor = await requestJSONObject('localhost', 3001, '/armor');

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
