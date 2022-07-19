import DecorationRow from "./decorationRow";
import styles from '../styles/ObjectDisplayRows.module.css';
import { useState } from 'react';

export default function DecorationDisplayRows({ decorations }) {

    const [decorationArray, setDecorations] = useState(decorations);

    async function handleSubmit(event) {
        event.preventDefault();
        setDecorations(null);

        let query = '/decorations?';
        
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
        setDecorations(response);
    }

    return (
        <>

        <form onSubmit={handleSubmit} className={styles.filterContainer}>

            <div className={styles.inputContainer}>

                <div className={styles.input}>
                    <label htmlFor='sortBy'>Sort By:</label>
                    <select name='sortBy' id='sortBy'>
                        <option value='slotLevel'>Slot Level</option>
                        <option value='name'>Name</option>
                        <option value='rarity'>Rarity</option>
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
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' id='name' />
                </div>

                <div className={styles.input}>
                    <label htmlFor='slotLevel'>Slot Level:</label>
                    <input type='number' name='slotLevel' id='slotLevel' />
                </div>

                <div className={styles.input}>
                    <label htmlFor='rarity'>Rarity:</label>
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
            {(decorationArray) ? (
                <>
                {decorationArray.map((decoration) => (
                    <DecorationRow decoration={decoration} />
                ))}
                </>
            ) : (
                <>Loading...</>
            )}
        </div>

        </>
    )
}