import styles from '../styles/DecorationRow.module.css';

export default function DecorationRow({ decoration }) {

    return (
        <div className={styles.decoration}>
            <div className={styles.rarirty}>{decoration.rarity}</div>
            <div className={styles.decorationProp}>{decoration.slotLevel}</div>
            <div className={styles.decorationProp}>{decoration.name}</div>
            <div className={styles.decorationProp}>{decoration.skill}</div>
        </div>
    )
}