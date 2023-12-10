class hero {
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }
    heroTurn(){
        let attack = "ataque básico";

        if(this.type === "guerreiro"){
            attack = "espada"
        } else if(this.type === "mago"){
            attack = "magia"
        } else if(this.type === "monge"){
            attack = "artes marciais"
        } else if(this.type === "ninja"){
            attack = "shuriken"
        }

        console.log(`O ${this.type} atacou usando ${attack}`)
    }
}


let mage = new hero("SkriVliRolis", 300, "mago");
let warrior = new hero("Heldrin", 30, "ninja");
let monk = new hero("Pedro", 50, "monge");

mage.heroTurn()
warrior.heroTurn()
monk.heroTurn()