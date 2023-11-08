class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = "magia";
                break
            case "guerreiro":
                ataque = "espada";
                break
            case "arqueiro":
                ataque = "arco";
                break
            case "necromancer":
                ataque = "monstros"
                break
            default: 
                ataque = "realizou um ataque";
        }
       
        console.log(`O ${this.tipo} atacou usando ${ataque}`);  

    }
}

const heroi1 = new heroi('Beserker', 28, 'guerreiro');
const heroi2 = new heroi('Cliodna', 78, 'mago');
const heroi3 = new heroi('Ranger', 32, 'arqueiro');
const heroi4 = new heroi('Rainstorm', 18, 'necromancer');

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();