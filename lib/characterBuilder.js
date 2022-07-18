export class Character {
    constructor() {
        this.attack = 0;
        this.element = { type: '', damage: 0};
        this.affinity = 0;
        this.defense = 0;
        this.fire = 0;
        this.water = 0;
        this.thunder = 0;
        this.ice = 0;
        this.dragon = 0;
        this.skills = [];
        this.armor = {
            head: new Armor(),
            chest: new Armor(),
            arms: new Armor(),
            waist: new Armor(),
            legs: new Armor(),
        }
        this.weapon = new Weapon;
    }

    updateStats() {
        this.attack = this.weapon.attack;
        this.element = this.weapon.elementDamage;
        this.affinity = this.weapon.affinity;

        this.defense = this.armor.head.defense +
            this.armor.chest.defense +
            this.armor.arms.defense + 
            this.armor.waist.defense +
            this.armor.legs.defense +
            this.weapon.defenseBonus;

        this.water = this.armor.head.water +
        this.armor.chest.water +
        this.armor.arms.water + 
        this.armor.waist.water +
        this.armor.legs.water;  
        
        this.thunder = this.armor.head.thunder +
        this.armor.chest.thunder +
        this.armor.arms.thunder + 
        this.armor.waist.thunder +
        this.armor.legs.thunder; 

        this.ice = this.armor.head.ice +
        this.armor.chest.ice +
        this.armor.arms.ice + 
        this.armor.waist.ice +
        this.armor.legs.ice; 

        this.dragon = this.armor.head.dragon +
        this.armor.chest.dragon +
        this.armor.arms.dragon + 
        this.armor.waist.dragon +
        this.armor.legs.dragon; 

        this.fire = this.armor.head.fire +
        this.armor.chest.fire +
        this.armor.arms.fire + 
        this.armor.waist.fire +
        this.armor.legs.fire; 
        
    }

    setWeapon(weapon) {
        const newWeapon = new Weapon().convertFromJSON(weapon);
        this.weapon = newWeapon;
        this.updateStats();
    }    

    setArmor(armor) {
        const newArmor = new Armor().convertFromJSON(armor);

        switch (armor.type) {
            case 'head': this.armor.head = newArmor; break;
            case 'chest': this.armor.chest = newArmor; break;
            case 'arms': this.armor.arms = newArmor; break;
            case 'waist': this.armor.waist = newArmor; break;
            case 'legs': this.armor.legs = newArmor; break;
        }

        this.updateStats();
    }
}

class Weapon {
    constructor() {
        this.name = '';
        this.attack = 0;
        this.slotLevels = [];
        this.rampageSlot = 0;
        this.elementDamage = { type: '', damage: 0 };
        this.defenseBonus = 0;
        this.affinity = 0;
        this.topSharpness = { 
            red: 0, orange: 0, yellow: 0,
            green: 0, blue: 0, white: 0, purple: 0,
        }
        this.bottomSharpness = { 
            red: 0, orange: 0, yellow: 0,
            green: 0, blue: 0, white: 0, purple: 0,
        }
        this.rarity = 0;
        this.type = '';
    }

    convertFromJSON(json) {        
        this.name = json.name;
        this.attack = json.damage;
        this.slotLevels = json.slotLevels;
        if (json.rampageSlot) this.rampageSlot = json.rampageSlot;
        if (json.elementDamage) this.elementDamage = json.elementDamage;
        if (json.defenseBonus) this.defenseBonus = json.defenseBonus;
        if (json.affinity) this.affinity = json.affinity;
        if (json.topSharpness) this.topSharpness = json.topSharpness;
        if (json.bottomSharpness) this.bottomSharpness = json.bottomSharpness;
        this.rarity = json.rarity;
        this.type = json.type;

        return this;
    }
}

class Armor {
    constructor() {
        this.name = '';
        this.defense = 0;
        this.level = 0;
        this.slotLevels = [];
        this.fire = 0;
        this.water = 0;
        this.thunder = 0;
        this.ice = 0;
        this.dragon = 0;
        this.skills = [];
        this.rarity = 0;
    }    

    convertFromJSON(json) {
        this.name = json.name;
        this.skills = json.skills;
        this.slotLevels = json.skillSlots;
        this.rarity = json.rarity;
        this.defense = json.defense;
        this.fire = json.fire;
        this.water = json.water;
        this.thunder = json.thunder;
        this.ice = json.ice;
        this.dragon = json.dragon;

        return this;
    }
}