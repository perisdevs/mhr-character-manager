import Layout from '../../components/layout';
import { Character } from '../../lib/characterBuilder';
import styles from '../../styles/CharacterBuilder.module.css';
import CharacterDisplay from '../../components/characterDisplay';
import { queryExternalAPI } from '../../lib/requests';
import ArmorDisplayRows from '../../components/armorDisplayRows';
import WeaponDisplayRows from '../../components/weaponDisplayRows';
import { useState } from 'react';

export async function getServerSideProps() {
    let weapons = await queryExternalAPI('/weapons');
    let armor = await queryExternalAPI('/armor');    

    return {
        props: {
            weapons: weapons,
            armor: armor,
        },
    };
}

export default function Home(props) {

    const [itemDisplay, setDisplay] = useState(<WeaponDisplayRows weapons={props.weapons} />);
    
    const [character, setCharacter] = useState(new Character());
    const [characterDisplay, setCharacterDisplay] = useState(<CharacterDisplay character={character} />);
    
    const updateCharacterFunction = function() {
        setCharacter(character);
        setCharacterDisplay(<CharacterDisplay character={character} />);
    }

    return (
        <Layout>

            {characterDisplay}

            <div className={styles.toolbar}>

                <span className={styles.toolLink} onClick={() => {
                    setDisplay(<WeaponDisplayRows weapons={props.weapons} character={character} addFn={updateCharacterFunction} />);                    
                }}>
                    Weapons
                </span>

                <span className={styles.toolLink} onClick={() => {
                    setDisplay(<ArmorDisplayRows armor={props.armor} character={character} addFn={updateCharacterFunction} />);                    
                }}>
                    Armor
                </span>

            </div>

            {itemDisplay}

        </Layout>
    );
}