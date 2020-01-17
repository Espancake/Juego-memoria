const btnEmpezar = document.getElementById('btnEmpezar')
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const nivelFinal = 10




class Juego {
    constructor(){
        this.inicializar()
        this.generarSecuencia()
        this.siguienteNivel()
    }
    inicializar(){
        this.elegirColor = this.elegirColor.bind(this)
        btnEmpezar.classList.add('hide')
        this.nivel = 1
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }

    generarSecuencia(){
        this.secuencia =  new Array(10).fill(0).map(n=> Math.floor(Math.random()*4))
    }

    siguienteNivel(){
        this.iluminarSecuencia()
        this.agregarEventosClick()
    }

    agregarEventosClick(){
        this.colores.celeste.addEventListener('click', this.elegirColor.bind(this))
        this.colores.violeta.addEventListener('click', this.elegirColor.bind(this))
        this.colores.naranja.addEventListener('click', this.elegirColor.bind(this))
        this.colores.verde.addEventListener('click', this.elegirColor.bind(this))
    }

    elegirColor(ev){
        console.log(this)
    }

    transformarNumeroAColor(numero){
        switch(numero){
            case 0:
                return 'celeste'
            case 1: 
                return 'violeta'
            case 2:
                return 'naranja'
            case 3:
                return 'verde'
        }
    }

    iluminarSecuencia(){
        for (let i = 0; i < this.nivel; i++){
            const color = this.transformarNumeroAColor(this.secuencia[i])
           setTimeout(
               ()=>this.iluminarColor(color), 1000 * i
               ) 
        }
    }

    iluminarColor(color){
        this.colores[color].classList.add('light')
        setTimeout(()=> this.apagarColor(color),350)
    }
    apagarColor(color){
        this.colores[color].classlist.remove('light')
    }
}

function empezarJuego(){
    var juego = new Juego()
}