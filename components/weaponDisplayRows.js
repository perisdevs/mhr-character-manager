import WeaponRow from "./weaponRow";
import styles from '../styles/WeaponDisplayRows.module.css';
import { useState } from 'react';
import { sortWeaponsByAffinityAscending, sortWeaponsByAffinityDescending, sortWeaponsByDamageAscending, sortWeaponsByDamageDescending, sortWeaponsByDBonusAscending, sortWeaponsByDBonusDescending, sortWeaponsByEDamageAscending, sortWeaponsByEDamageDescending, sortWeaponsByNameAscending, sortWeaponsByNameDescending, sortWeaponsByRarityAscending, sortWeaponsByRarityDescending, sortWeaponsByRSlotAscending, sortWeaponsByRSlotDescending, sortWeaponsBySharpnessAscending, sortWeaponsBySharpnessDescending, sortWeaponsBySlotsAscending, sortWeaponsBySlotsDescending, sortWeaponsByTypeAscending, sortWeaponsByTypeDescending } from "../lib/sorts";

export default function WeaponDisplayRows({ weapons }) {    
    
    const [weaponArray, setWeapons] = useState(weapons);   
    const [sortState, setState] = useState(0);        

    function sortWeapons(type, state) {      
        
        switch(state) {

            case 0:                
                switch(type) {
                    case 'rarity': setWeapons(sortWeaponsByRarityAscending(weaponArray)); break;
                    case 'type': setWeapons(sortWeaponsByTypeAscending(weaponArray)); break;
                    case 'name': setWeapons(sortWeaponsByNameAscending(weaponArray)); break;
                    case 'damage': setWeapons(sortWeaponsByDamageAscending(weaponArray)); break;
                    case 'slots': setWeapons(sortWeaponsBySlotsAscending(weaponArray)); break;                    
                    case 'rslot': setWeapons(sortWeaponsByRSlotAscending(weaponArray)); break;
                    case 'edamage': setWeapons(sortWeaponsByEDamageAscending(weaponArray)); break;
                    case 'dbonus': setWeapons(sortWeaponsByDBonusAscending(weaponArray)); break;
                    case 'affinity': setWeapons(sortWeaponsByAffinityAscending(weaponArray)); break;
                    case 'sharpness': setWeapons(sortWeaponsBySharpnessAscending(weaponArray)); break;
                }
                setState(1);
                break;

            case 1:                
                switch(type) {                    
                    case 'rarity': setWeapons(sortWeaponsByRarityDescending(weaponArray)); break;
                    case 'type': setWeapons(sortWeaponsByTypeDescending(weaponArray)); break;
                    case 'name': setWeapons(sortWeaponsByNameDescending(weaponArray)); break;
                    case 'damage': setWeapons(sortWeaponsByDamageDescending(weaponArray)); break;
                    case 'slots': setWeapons(sortWeaponsBySlotsDescending(weaponArray)); break;
                    case 'rslot': setWeapons(sortWeaponsByRSlotDescending(weaponArray)); break;
                    case 'edamage': setWeapons(sortWeaponsByEDamageDescending(weaponArray)); break;
                    case 'dbonus': setWeapons(sortWeaponsByDBonusDescending(weaponArray)); break;
                    case 'affinity': setWeapons(sortWeaponsByAffinityDescending(weaponArray)); break;
                    case 'sharpness': setWeapons(sortWeaponsBySharpnessDescending(weaponArray)); break;
                }
                setState(2);
                break;

            case 2: setWeapons(weapons); setState(0); break;
        }
             
    }

    function startSort(event) {
        let type = event.target.getAttribute('type');
        sortWeapons(type, sortState);
    }

    return  (
        <>
        <div className={styles.buttons}>            
            <span className={styles.button} onClick={startSort} type='rarity'>Rarity</span>
            <span className={styles.button} onClick={startSort} type='type'>Type</span>
            <span className={styles.button} onClick={startSort} type='name'>Name</span>
            <span className={styles.button} onClick={startSort} type='damage'>Damage</span>
            <span className={styles.button} onClick={startSort} type='slots'>Slots</span>
            <span className={styles.button} onClick={startSort} type='rslot'>R. Slot</span>
            <span className={styles.button} onClick={startSort} type='edamage'>E. Damage</span>
            <span className={styles.button} onClick={startSort} type='dbonus'>D. Bonus</span>
            <span className={styles.button} onClick={startSort} type='affinity'>Affinity</span>
            <span className={styles.button} onClick={startSort} type='sharpness'>Sharpness</span>
        </div>

        <div className={styles.weapons}>
            {weaponArray.map((weapon) => (                
                <WeaponRow weapon={weapon} />
            ))}
        </div>
        </>
    );
}