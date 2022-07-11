import WeaponRow from "./weaponRow";
import styles from '../styles/ObjectDisplayRows.module.css';
import { useState } from 'react';

export default function WeaponDisplayRows({ weapons }) {    
    
    const [weaponArray, setWeapons] = useState(weapons);        

    async function handleSubmit(event) {
        event.preventDefault();
        setWeapons(null);

        let query = '/weapons?';

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
        setWeapons(response);
    }

    return  (
        <>
        
        <form onSubmit={handleSubmit} className={styles.filterContainer}>

            <div className={styles.inputContainer}>

                <div className={styles.input}>
                    <label for='sortBy'>Sort By:</label>
                    <select name='sortBy' id='sortBy'>
                        <option value='type'>Type</option>
                        <option value='rarity'>Rarity</option>
                        <option value='damage'>Damage</option>
                        <option value='name'>Name</option>
                        <option value='slotLevel'>Slot Levels</option>
                        <option value='rampageSlot'>Rampage Slot</option>
                        <option value='defenseBonus'>Defense Bonus</option>
                        <option value='affinity'>Affinity</option>
                        <option value='elementDamage'>Element Damage</option>
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
                    <select name='type' id='type'>
                        <option value={null}> </option>
                        <option value='greatSword'>Great Sword</option>
                        <option value='swordAndShield'>Sword &amp; Shield</option>
                        <option value='dualBlade'>Dual Blades</option>
                        <option value='longSword'>Long Sword</option>
                        <option value='hammer'>Hammer</option>
                        <option value='huntingHorn'>Hunting Horn</option>
                        <option value='lance'>Lance</option>
                        <option value='gunlance'>Gunlance</option>
                        <option value='switchAxe'>Switch Axe</option>
                        <option value='chargeBlade'>Charge Blade</option>
                        <option value='insectGlaive'>Insect Glaive</option>
                        <option value='bow'>Bow</option>
                        <option value='lightBowgun'>Light Bowgun</option>
                        <option value='heavyBowgun'>Heavy Bowgun</option>
                    </select>
                </div>

                <div className={styles.input}>
                    <label for='damage'>Damage:</label>
                    <input type='number' name='damage' id='damage' />
                </div>

                <div className={styles.input}>
                    <label for='slotLevels'>Slot Levels:</label>
                    <input type='number' name='slotLevels' id='slotLevels' />
                </div>                                                                                    

                <div className={styles.input}>
                    <label for='rampageSlot'>Ramapge Slot:</label>
                    <input type='number' name='rampageSlot' id='rampageSlot' />
                </div>

                <div className={styles.input}>
                    <label for='element'>Element:</label>
                    <select name='element' id='element'>
                        <option value={null}> </option>
                        <option value='Fire'>Fire</option>
                        <option value='Water'>Water</option>
                        <option value='Thunder'>Thunder</option>
                        <option value='Ice'>Ice</option>
                        <option value='Dragon'>Dragon</option>
                        <option value='Poison'>Poison</option>
                        <option value='Paralysis'>Paralysis</option>
                        <option value='Sleep'>Sleep</option>
                        <option value='Blast'>Blast</option>
                    </select>
                </div>

                <div className={styles.input}>
                    <label for='elementDamage'>Element Damage:</label>
                    <input type='number' name='elementDamage' id='elementDamage' />
                </div>

                <div className={styles.input}>
                    <label for='defenseBonus'>Defense Bonus:</label>
                    <input type='number' name='defenseBonus' id='defenseBonus' />
                </div>                

                <div className={styles.input}>
                    <label for='affinity'>Affinity:</label>
                    <input type='number' name='affinity' id='affinity' />
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
            {(weaponArray) ? (
                <>
                {weaponArray.map((weapon) => (                
                <WeaponRow weapon={weapon} />
            ))}
                </>
            ) : (
                <>Loading...</>
            )}            
        </div>
        </>
    );
}