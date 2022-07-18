import styles from '../styles/CharacterBuilder.module.css';
import Sharpness from './sharpness';

export default function CharacterDisplay({ character }) {

    return(

    <div className={styles.builderContainer}>

                <div className={styles.summaryContainer}>

                    <div className={styles.summaryRow}>                        
                        <div className={styles.characterProp}>
                            Character
                        </div>
                    </div>

                    <div className={styles.summaryRow}>
                        <div className={styles.characterProp}>Attack:</div>
                        <div className={styles.characterProp}>{character.attack}</div>
                    </div>

                    <div className={styles.summaryRow}>
                        <div className={styles.characterProp}>Element:</div>
                        <div className={styles.characterProp}>{character.element.type} {character.element.damage}</div>
                    </div>

                    <div className={styles.summaryRow}>
                        <div className={styles.characterProp}>Affinity:</div>
                        <div className={styles.characterProp}>{character.affinity}</div>
                    </div>

                    <div className={styles.summaryRow}>
                        <div className={styles.characterProp}>Defense:</div>
                        <div className={styles.characterProp}>{character.defense}</div>
                    </div>

                    <div className={styles.summaryRow}>
                        <div className={styles.characterProp}>Fire:</div>
                        <div className={styles.characterProp}>{character.fire}</div>
                    </div>

                    <div className={styles.summaryRow}>
                        <div className={styles.characterProp}>Water:</div>
                        <div className={styles.characterProp}>{character.water}</div>
                    </div>

                    <div className={styles.summaryRow}>
                        <div className={styles.characterProp}>Thunder:</div>
                        <div className={styles.characterProp}>{character.thunder}</div>
                    </div>

                    <div className={styles.summaryRow}>
                        <div className={styles.characterProp}>Ice:</div>
                        <div className={styles.characterProp}>{character.ice}</div>
                    </div>

                    <div className={styles.summaryRow}>
                        <div className={styles.characterProp}>Dragon:</div>
                        <div className={styles.characterProp}>{character.dragon}</div>
                    </div>

                </div>

                <div className={styles.summaryContainer}>

                <div className={styles.summaryRow}>                        
                        <div className={styles.characterProp}>
                            Weapon
                        </div>
                    </div>

                    <div className={styles.summaryRow}>
                        <div className={styles.characterProp}>Name:</div>
                        <div className={styles.characterProp}>{character.weapon.name}</div>
                    </div>

                    <div className={styles.summaryRow}>
                        <div className={styles.characterProp}>Attack:</div>
                        <div className={styles.characterProp}>{character.weapon.attack}</div>
                    </div>

                    <div className={styles.summaryRow}>
                        <div className={styles.characterProp}>Element:</div>
                        <div className={styles.characterProp}>{character.weapon.elementDamage.type} {character.weapon.elementDamage.damage}</div>
                    </div>

                    <div className={styles.summaryRow}>
                        <div className={styles.characterProp}>Affinity:</div>
                        <div className={styles.characterProp}>{character.weapon.affinity}</div>
                    </div>

                    <div className={styles.summaryRow}>
                        <div className={styles.characterProp}>Defense Bonus:</div> 
                        <div className={styles.characterProp}>{character.weapon.defenseBonus}</div>
                    </div>

                    <div className={styles.summaryRow}>
                        <div className={styles.characterProp}>Slots:</div>                                               
                        <div className={styles.characterProp}>{character.weapon.slotLevels}</div>
                    </div>

                    <div className={styles.summaryRow}>
                        <div className={styles.characterProp}>Rampage Slot:</div>
                        <div className={styles.characterProp}>{character.weapon.rampageSlot}</div>
                    </div>

                    <div className={styles.summaryRow}>
                        <div className={styles.characterProp}>Sharpness:</div>
                        <div className={styles.characterProp}>
                            {(character.weapon.topSharpness && character.weapon.bottomSharpness) ? (
                                <Sharpness top={character.weapon.topSharpness} bottom={character.weapon.bottomSharpness} />
                            ) : (<></>)}                            
                        </div>
                    </div>

                    <div className={styles.summaryRow}>
                        <div className={styles.characterProp}>Rarity:</div>
                        <div className={styles.characterProp}>{character.weapon.rarity}</div>
                    </div>

                    <div className={styles.summaryRow}>
                        <div className={styles.characterProp}>Type:</div>
                        <div className={styles.characterProp}>{character.weapon.type}</div>
                    </div>

                </div>

                <div className={styles.armorContainer}>

                    <div className={styles.armorPiece}>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Head</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Lv. {character.armor.head.level}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Name:</div>
                            <div className={styles.characterProp}>{character.armor.head.name}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Slots:</div>
                            <div className={styles.characterProp}>{character.armor.head.slotLevels}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Defense:</div>
                            <div className={styles.characterProp}>{character.armor.head.defense}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Fire:</div>
                            <div className={styles.characterProp}>{character.armor.head.fire}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Water:</div>
                            <div className={styles.characterProp}>{character.armor.head.water}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Thunder:</div>
                            <div className={styles.characterProp}>{character.armor.head.thunder}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Ice:</div>
                            <div className={styles.characterProp}>{character.armor.head.ice}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Dragon:</div>
                            <div className={styles.characterProp}>{character.armor.head.dragon}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Rarity:</div>
                            <div className={styles.characterProp}>{character.armor.head.rarity}</div>
                        </div>
                        
                    </div>
                        
                    <div className={styles.armorPiece}>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Chest</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Lv. {character.armor.chest.level}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Name:</div>
                            <div className={styles.characterProp}>{character.armor.chest.name}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Slots:</div>
                            <div className={styles.characterProp}>{character.armor.chest.slotLevels}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Defense:</div>
                            <div className={styles.characterProp}>{character.armor.chest.defense}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Fire:</div>
                            <div className={styles.characterProp}>{character.armor.chest.fire}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Water:</div>
                            <div className={styles.characterProp}>{character.armor.chest.water}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Thunder:</div>
                            <div className={styles.characterProp}>{character.armor.chest.thunder}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Ice:</div>
                            <div className={styles.characterProp}>{character.armor.chest.ice}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Dragon:</div>
                            <div className={styles.characterProp}>{character.armor.chest.dragon}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Rarity:</div>
                            <div className={styles.characterProp}>{character.armor.chest.rarity}</div>
                        </div>

                    </div>

                    <div className={styles.armorPiece}>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Arms</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Lv. {character.armor.arms.level}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Name:</div>
                            <div className={styles.characterProp}>{character.armor.arms.name}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Slots:</div>
                            <div className={styles.characterProp}>{character.armor.arms.slotLevels}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Defense:</div>
                            <div className={styles.characterProp}>{character.armor.arms.defense}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Fire:</div>
                            <div className={styles.characterProp}>{character.armor.arms.fire}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Water:</div>
                            <div className={styles.characterProp}>{character.armor.arms.water}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Thunder:</div>
                            <div className={styles.characterProp}>{character.armor.arms.thunder}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Ice:</div>
                            <div className={styles.characterProp}>{character.armor.arms.ice}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Dragon:</div>
                            <div className={styles.characterProp}>{character.armor.arms.dragon}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Rarity:</div>
                            <div className={styles.characterProp}>{character.armor.arms.rarity}</div>
                        </div>

                    </div>

                    <div className={styles.armorPiece}>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Waist</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Lv. {character.armor.waist.level}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Name:</div>
                            <div className={styles.characterProp}>{character.armor.waist.name}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Slots:</div>
                            <div className={styles.characterProp}>{character.armor.waist.slotLevels}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Defense:</div>
                            <div className={styles.characterProp}>{character.armor.waist.defense}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Fire:</div>
                            <div className={styles.characterProp}>{character.armor.waist.fire}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Water:</div>
                            <div className={styles.characterProp}>{character.armor.waist.water}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Thunder:</div>
                            <div className={styles.characterProp}>{character.armor.waist.thunder}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Ice:</div>
                            <div className={styles.characterProp}>{character.armor.waist.ice}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Dragon:</div>
                            <div className={styles.characterProp}>{character.armor.waist.dragon}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Rarity:</div>
                            <div className={styles.characterProp}>{character.armor.waist.rarity}</div>
                        </div>

                    </div>

                    <div className={styles.armorPiece}>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Legs</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Lv. {character.armor.legs.level}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Name:</div>
                            <div className={styles.characterProp}>{character.armor.legs.name}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Slots:</div>
                            <div className={styles.characterProp}>{character.armor.legs.slotLevels}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Defense:</div>
                            <div className={styles.characterProp}>{character.armor.legs.defense}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Fire:</div>
                            <div className={styles.characterProp}>{character.armor.legs.fire}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Water:</div>
                            <div className={styles.characterProp}>{character.armor.legs.water}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Thunder:</div>
                            <div className={styles.characterProp}>{character.armor.legs.thunder}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Ice:</div>
                            <div className={styles.characterProp}>{character.armor.legs.ice}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Dragon:</div>
                            <div className={styles.characterProp}>{character.armor.legs.dragon}</div>
                        </div>

                        <div className={styles.summaryRow}>
                            <div className={styles.characterProp}>Rarity:</div>
                            <div className={styles.characterProp}>{character.armor.legs.rarity}</div>
                        </div>

                    </div>                    

                </div>

            </div>  
        )
}