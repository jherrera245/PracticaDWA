//creacion de objetos

/*const album1 = {
    nombre : 'The Bitter Truth',
    id : 01,
    reproducir(){
        return `Reproduciondo album ${this.nombre}`;
    }
}*/


// POO, uso de las clases
class Album {
    constructor(nombre, id){
        this.nombre = nombre;
        this.id = id;
    }
    reproducir(){
        return `Reproduciondo album ${this.nombre}`;
    }
}


class PodCast extends Album{
    constructor(nombre, id, capitulo){
        super(nombre, id);
        this.capitulo = capitulo;
    }

    //metodos
    reproducirPodCast(){
        return `Repoduciendo el Potcast ${this.nombre}, capitulo ${this.capitulo}`;
    }
}

class Anuncio extends Album{
    mostrarAnuncio(){
        return `Accede a una cuenta premiun para disfrutar mas de ${this.nombre}!!`;
    }
}

const album1 = new Album('Fallen', 001);
const album2 = new Album('Orgin', 002);
const podcast1 = new PodCast('Salud mental en tiempos de pandemia', 003, 2);
const anuncio1 = new Anuncio("Triller", 005);

console.log(album1.reproducir());
console.log(album2.reproducir());
console.log(podcast1.reproducirPodCast());
console.log(anuncio1.mostrarAnuncio());