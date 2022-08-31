class Usuario{
    constructor(nombre, apellido){
        this.nombre=nombre,
        this.apellido=apellido,
        this.mascota = [];
        this.libros = [];
    }
    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    };
    addMascota(String){
        this.mascota.push(String)
    };
    countMascotas(){
        return this.mascota.length;
    };
    addBook(libro, autor){
        this.libros.push({libro, autor});
    };
    getBookNames(){
        return this.libros.map((x) => {
             return x.libro
        });
    }
}
//creo objeto:
let Daniel = new Usuario('Daniel', 'Tenconi');

//nombre completo:
console.log(Daniel.getFullName());

//pusheo mascotas:
Daniel.addMascota('gato');
Daniel.addMascota('perro');
Daniel.addMascota('tucan');
console.log(Daniel.mascota);

//devuelvo cantidad de mascotas:
console.log(`Tenes ${Daniel.countMascotas()} ${Daniel.countMascotas() == 1 ? 'mascotita' : 'mascotas' }`);

//pusheo libros:
Daniel.addBook('El Sr. de las Moscas', 'William Golding');
Daniel.addBook('El código DaVinci', 'Dan Brawn');
Daniel.addBook('10000 leguas de viaje submarino', 'Julio Verne');
console.log(Daniel.libros);

//devuelvo nombres de libros
console.log(Daniel.getBookNames());