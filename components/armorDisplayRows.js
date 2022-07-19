import ArmorRow from "./armorRow";
import styles from '../styles/ObjectDisplayRows.module.css';
import { useState } from 'react';

export default function ArmorDisplayRows({ armor, character, addFn }) {

    const [armorArray, setArmor] = useState(armor);

    async function handleSubmit(event) {
        event.preventDefault();
        setArmor(null);

        let query = '/armor?';

        const inputs = Array.from(event.target.elements);

        inputs.forEach((input) => {

            if (input.value) query += `${input.name}=${input.value}&`;
        });

        let url = 'api/requestAPI';
        let options = {
            method: 'POST',
            body: query,
        };
        let response = await (await fetch(url, options)).json();
        setArmor(response);
    }

    return (
        <>

        <form onSubmit={handleSubmit} className={styles.filterContainer}>

            <div className={styles.inputContainer}>

                <div className={styles.input}>
                    <label htmlFor='sortBy'>Sort By:</label>
                    <select name='sortBy' id='sortBy'>
                        <option value='type'>Type</option>
                        <option value='rarity'>Rarity</option>
                        <option value='skillSlots'>Skill Slots</option>
                        <option value='defense'>Defense</option>                        
                        <option value='fire'>Fire</option>
                        <option value='water'>Water</option>
                        <option value='thunder'>Thunder</option>
                        <option value='ice'>Ice</option>
                        <option value='dragon'>Dragon</option>
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
                    <label htmlFor='type'>Type:</label>
                    <select name='type' id='type'>
                        <option value={null}> </option>
                        <option value='head'>Head</option>
                        <option value='chest'>Chest</option>
                        <option value='arms'>Arms</option>
                        <option value='waist'>Waist</option>
                        <option value='legs'>Legs</option>                        
                    </select>
                </div>

                <div className={styles.input}>
                    <label htmlFor='skillSlots'>Skill Slots:</label>
                    <input type='number' name='skillSlots' id='skillSlots' />
                </div>

                <div className={styles.input}>
                    <label htmlFor='defense'>Defense:</label>
                    <input type='number' name='defense' id='defense' />
                </div>                

                <div className={styles.input}>
                    <label htmlFor='fire'>Fire</label>
                    <input type='number' name='fire' id='fire' />
                </div>

                <div className={styles.input}>
                    <label htmlFor='water'>Water</label>
                    <input type='number' name='water' id='water' />
                </div>

                <div className={styles.input}>
                    <label htmlFor='thunder'>Thunder</label>
                    <input type='number' name='thunder' id='thunder' />
                </div>

                <div className={styles.input}>
                    <label htmlFor='ice'>Ice</label>
                    <input type='number' name='ice' id='ice' />
                </div>

                <div className={styles.input}>
                    <label htmlFor='dragon'>Dragon</label>
                    <input type='number' name='dragon' id='dragon' />
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
            {(armorArray) ? (
                <>
                {armorArray.map((armor) => (
                    <ArmorRow armor={armor} character={character} addFn={addFn} key={armor.name} />                    
                ))}
                </>
            ) : (
                <>Loading...</>
            )}
        </div>
        </>
    )
}