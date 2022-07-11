import MaterialRow from "./materialRow";
import styles from '../styles/ObjectDisplayRows.module.css';
import { useState } from 'react';

export default function MaterialDisplayRows({ materials }) {

    const [materialArray, setMaterials] = useState(materials);

    async function handleSubmit(event) {
        event.preventDefault();
        setMaterials(null);

        let query = '/materials?';

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
        setMaterials(response);
    }

    return (
        <>

        <form onSubmit={handleSubmit} className={styles.filterContainer}>

            <div className={styles.inputContainer}>

                <div className={styles.input}>
                    <label for='sortBy'>Sort By:</label>
                    <select name='sortBy' id='sortBy'>
                        <option value='type'>Type</option>
                        <option value='rarity'>Rarity</option>                        
                        <option value='name'>Name</option>                        
                    </select>
                </div>

                <div className={styles.input}>
                    <label for='sortOrder'>Order:</label>
                    <select name='sortOrder' id='sortOrder'>
                        <option value='asc'>Ascending</option>
                        <option value='desc'>Descending</option>
                    </select>
                </div>

                <div className={styles.input}>
                    <label for='name'>Name:</label>
                    <input type='text' name='name' id='name' />
                </div>

                <div className={styles.input}>
                    <label for='type'>Type:</label>
                    <input type='text' name='type' id='type' />
                </div> 

                <div className={styles.input}>
                    <label for='rarity'>Rarity:</label>
                    <select name='rarity' id='rarity'>
                        <option value={null}> </option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                    </select>
                </div>  

            </div>

             <button type='submit'>Apply Filter</button>

        </form>

        <div className={styles.objects}>
            {(materialArray) ? (
                <>
                {materialArray.map((material) => (
                    <MaterialRow material={material} />
                ))}
                </>
            ) : (
                <>Loading...</>
            )}
        </div>

        </>
    )
}