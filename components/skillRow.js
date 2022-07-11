import styles from '../styles/SkillRow.module.css';

export default function SkillRow({ skill }) {

    return (
        <div className={styles.skill}>
            <div className={styles.skillProp}>{skill.name}</div>
            <div className={styles.skillProp}>{skill.maxLevel}</div>
            <div className={styles.skillProp}>
                {skill.progression.map((level) => (
                    <text className={styles.level}>{level}</text>
                ))}
            </div>
        </div>
    )
}