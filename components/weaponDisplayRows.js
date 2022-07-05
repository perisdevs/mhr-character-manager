import WeaponRow from "./weaponRow";
import styles from '../styles/WeaponDisplayRows.module.css';

export default function WeaponDisplayRows({ weapons }) {

    return  (
        <div className={styles.weapons}>
            {weapons.map((weapon) => (                
                <WeaponRow weapon={weapon} />
            ))}
        </div>
    )
}