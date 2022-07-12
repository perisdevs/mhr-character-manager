import SkillDisplayRows from "../../components/skillDisplayRows";
import Layout from '../../components/layout';
import { queryExternalAPI, requestJSONObject } from "../../lib/requests";

export async function getServerSideProps() {
    let skills = await queryExternalAPI('/skills')

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