import styles from '../styles/ArmorRow.module.css';
import Skill from './skill';

export default function ArmorRow({ armor, character, addFn }) {

    return (
        <div className={styles.armor}>
            <div className={styles.rarity}>{armor.rarity}</div>
            <div className={styles.type}>{armor.type}</div>
            <div className={styles.armorProp}>{armor.name}</div>
            <div className={styles.armorProp}>{armor.defense}</div>
            <div className={styles.skillSlots}>
                {armor.skillSlots.map((slot) => (
                    <text>{slot}</text>
                ))}
                </div>
            <div className={styles.armorProp}>{armor.fire}</div>
            <div className={styles.armorProp}>{armor.water}</div>
            <div className={styles.armorProp}>{armor.thunder}</div>
            <div className={styles.armorProp}>{armor.ice}</div>
            <div className={styles.armorProp}>{armor.dragon}</div>
            <div className={styles.skills}>
                {armor.skills.map((skill) => (
                    <Skill skill={skill} />
                ))}
            </div>

            {(character) ? (
                <div className={styles.armorProp}>
                    <button onClick={() => {
                        character.setArmor(armor);
                        addFn(character);
                    }}>Add</button>
                </div>
            ) : (<></>)}
        </div>
    )
}