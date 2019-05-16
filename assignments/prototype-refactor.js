/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/ 
//Create GameObject Constructor
    function GameObject(GOattributes){
        this.createdAt = GOattributes.createdAt;
        this.name = GOattributes.name;
        this.dimensions = GOattributes.dimensions;
}

//Methods for GameObject Constructor
    GameObject.prototype.destroy = function(){
        return `${this.name} was removed from the game`;
}

//Create a Class for GameObject
    class GameObject{
        construction(GOattributes){
            this.createdAt = GOattributes.createdAt;
            this.dimensions = GOattributes.dimensions;
        }
    
//Class Method for GameObject
    destroy() {
        return `${this.name} was removed from the game.`;
        }
}
 
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
//CharacterStats Constructor
    function CharacterStats(CSattributes) {
        this.healthpoints = CSattributes.healthpoints;
        GameObject.call(this, CSattributes);
}
  
//Inheritance
    CharacterStats.prototype = Object.create(GameObject.prototype);
  
//Methods for CharacterStats Constructor
    CharacterStats.prototype.takeDamage = function(){
        return `${this.name} took damage`;
}

//Class for CharacterStats
    class CharacterStats extends GameObject {
        constructor(CSattributes) {
        super(CSattributes);
        this.hp = CSattributes.hp;
        this.name = CSattributes.name;
        }
//Class Method for CharacterStats
    takeDamage() {
        return `${this.name} took damage.`;
        }
}
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
//Humanoid Constructor
    function Humanoid(Hattributes){  
        this.team = Hattributes.team; 
        this.weapons = Hattributes.weapons; 
        this.language = Hattributes.language; 
        CharacterStats.call(this,Hattributes);
}
  
//Inheritance
    Humanoid.prototype = Object.create(CharacterStats.prototype); 
  
//Methods for Humanoid Constructor
    Humanoid.prototype.greet = function() {
        return `${this.name} offers a greeting in ${this.language}`; 
}
//Class for Humanoid
    class Humanoid extends CharacterStats {
        constructor(Hattributes) {
            super(Hattributes);
            this.team = Hattributes.team;
            this.weapons = Hattributes.weapons;
            this.language = Hattributes.language;
        }
    
//Class Methods for Humanoid
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
        }
}
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  /*
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  */
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
    //Villain Constructor
    function Villian(Villainattributes){
      this.okLooks = Villainattributes.okLooks;
      this.HotHealth = Villainattributes.HotHealth;
      Humanoid.call(this, Villainattributes); 
}
  
    //Inheritance
    Villian.prototype = Object.create(Humanoid.prototype); 
  
    //Villain Class
    class Villain extends Humanoid {
        constructor(Villainattributes) {
            super(Villainattributes);
            this.okLooks = Villainattributes.okLooks;
            this.HotLooks = Villainattributes.HotLooks;
        }
}

    //Hero Constructor
    function Hero (HeroAttributes){
      this.goodLooks = heroAttributes.goodlooks;
      this.HotHealth = heroAttributes.HotHealth;
      Humanoid.call(this, heroAttributes);
}
  
    //Inheritance
    Hero.prototype = Object.create(Humanoid.prototype);  

    //Hero Class
    class Hero extends Humanoid {
        constructor(HeroAttributes) {
            super(HeroAttributes);
            this.goodLooks = HeroAttributes.goodLooks;
            this.HotLooks = HeroAttributes.HotLooks;
        }
    
}