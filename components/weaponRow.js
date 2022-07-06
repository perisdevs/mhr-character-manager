import styles from '../styles/WeaponRow.module.css';
import Sharpness from './sharpness';

export default function WeaponRow({ weapon }) {

    return (
        <div className={styles.weapon}>
            <div className={styles.rarity}>{weapon.rarity}</div>
            <div className={styles.type}>{weapon.type}</div>
            <div className={styles.weaponProp}>{weapon.name}</div>
            <div className={styles.weaponProp}>{weapon.damage}</div>
            <div className={styles.weaponProp}>
                <div className={styles.skillSlots}>{weapon.slotLevels}</div>
                <div className={styles.rampageSlot}>{weapon.rampageSlot}</div>
            </div>            
            <div className={styles.weaponProp}>
                {(weapon.elementDamage) ? (
                    <>
                    {weapon.elementDamage.type}&nbsp;{weapon.elementDamage.damage}
                    </>
                ) : (
                    <>---</>
                )}
            </div>
            <div className={styles.weaponProp}>{(weapon.defenseBonus) ? (
                <>{weapon.defenseBonus}</>
            ) : (<>0</>)}
            </div>
            <div className={styles.weaponProp}>{(weapon.affinity) ? (
                <>{weapon.affinity}</>
            ) : (<>0</>)}
            </div>
            <div className={styles.weaponProp}>
                {(weapon.topSharpness && weapon.bottomSharpness) ? (
                    <Sharpness top={weapon.topSharpness} bottom={weapon.bottomSharpness} />
                ) : (
                    <>---</>
                )}
            </div>
        </div>
    );
}