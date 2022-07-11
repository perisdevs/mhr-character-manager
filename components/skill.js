import styles from '../styles/Skill.module.css';

export default function Skill({ skill }) {

    return (
        <div className={styles.skill}>
            <text>{skill.name} Lv. {skill.level}</text>
        </div>
    );
}