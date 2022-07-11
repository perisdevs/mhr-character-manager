import SkillDisplayRows from "../../components/skillDisplayRows";
import Layout from '../../components/layout';
import { requestJSONObject } from "../../lib/requests";

export async function getServerSideProps() {
    let skills = await requestJSONObject('localhost', 3001, '/skills');

    return {
        props: {
            skills: skills,
        },
    };
}

export default function Home(props) {
    return (
        <Layout>
            <SkillDisplayRows skills={props.skills} />
        </Layout>
    )
}