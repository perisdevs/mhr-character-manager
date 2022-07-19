import SkillRow from './skillRow';
import styles from '../styles/ObjectDisplayRows.module.css';
import { useState } from 'react';

export default function SkillDisplayRows({ skills }) {

    const [skillArray, setSkills] = useState(skills);

    async function handleSubmit(event) {
        event.preventDefault();
        setSkills(null);

        let query = '/skills?';

        const inputs = Array.from(event.target.elements);

        inputs.forEach((input) => {

            if (input.value) query += `${input.name}=${input.value}&`;
        });

        let url = '/api/requestAPI';
        let options = {
            method: 'POST',
            body: query,
        };
        let response = await (await fetch(url, options)).json();
        setSkills(response);
    }

    return (
        <>

        <form onSubmit={handleSubmit} className={styles.filterContainer} >

            <div className={styles.inputContainer}>

                <div className={styles.input}>
                    <label htmlFor='sortBy'>Sort By:</label>
                    <select name='sortBy' id='sortBy'>
                        <option value='maxLevel'>Max Level</option>
                        <option value='name'>Name</option>
                    </select>
                </div>

                <div className={styles.input}>
                    <label htmlFor='sortOrder'>Order:</label>
                    <select name='sortOrder' id='sortOrder'>
                        <option value='asc'>Ascending</option>
                        <option value='desc'>Descending</option>
                    </select>
                </div>

                <div className={styles.input}>
                    <label htmlFor='name' id='name'>Name:</label>
                    <input type='text' name='name' id='name' />
                </div>

                <div className={styles.input}>
                    <label htmlFor='maxLevel' id='maxLevel'>Max Level:</label>
                    <input type='number' name='maxLevel' id='maxLevel' />
                </div>

            </div>

            <button type='submit'>Apply Filter</button>  

        </form>

        <div className={styles.objects}>
            {(skillArray) ? (
                <>
                {skillArray.map((skill) => (
                    <SkillRow skill={skill} key={skill.name} />
                ))}
                </>
            ) : (
                <>Loading...</>
            )}
        </div>

        </>
    )
}