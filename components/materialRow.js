import styles from '../styles/MaterialRow.module.css';

export default function MaterialRow({ material }) {

    return (
        <div className={styles.material}>
            <div className={styles.materialProp}>{material.rarity}</div>
            <div className={styles.materialProp}>{material.name}</div>
            <div className={styles.materialProp}>{material.type}</div>
            <div className={styles.materialProp}>
                {material.sources.map((source) => (
                    <text className={styles.source}>{source}</text>
                ))}
            </div>
        </div>
    )
}