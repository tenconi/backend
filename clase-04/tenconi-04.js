const fs = require('fs');
const { parse } = require('path');


class Container {
    constructor(route){
        this.route = route;
    }

    // Funcion PRIVADA, para no repetir la lectura del archivo. Metodo de manejo interno.
    async #readDoc (){
        try{
            const read = await fs.promises.readFile(this.route, 'utf-8');
            const parseRead = JSON.parse(read);
           return parseRead;
            //console.log(read); //levanta ok
        }catch(error){
            console.log(error);
        }
    }

    async save(obj){            
        const readAgain = await this.#readDoc();

        // Agrego validación.
        if(readAgain.length !== 0){
            //await fs.promises.writeFile(this.route, obj, 'utf-8');
            await fs.promises.writeFile(this.route, JSON.stringify( [...readAgain, {...obj, id:readAgain[readAgain.length - 1].id + 1 }], null, 2 ),'utf-8');// Hago SPREAD OP. y agrego nuevo "obj". 
        }else{
            await fs.promises.writeFile(this.route, JSON.stringify( [{...obj, id:1}] ),'utf-8');// Inicializo, x ej. en 1
        } 
    } 

    async getById(id){
        const readAgain = await this.#readDoc(); 
        const searchById = readAgain.filter(x=> x.id === id);
        console.log(searchById)
    }

    async getAll(){
        const readAgain = await this.#readDoc();
        console.log(readAgain);
    }

    async deleteById(id){             
        try{
           const readAgain = await this.#readDoc();
            const erase = readAgain.filter(x=> x.id !== id);// ID
            await fs.promises.writeFile(this.route, JSON.stringify(erase, null, 4), 'utf-8')

        }catch(error){
            console.alert(error);
        }     

    }

    async deleteAll(){
        await fs.promises.writeFile(this.route, '[]','utf-8')
    }

}


const content = new Container('./arch-clase04.txt');
// content.save({title:'blue', price:284, thumbnail:'https://economipedia.com/wp-content/uploads/dolar-1.jpg'});
// content.save({title:'bolsa', price:271, thumbnail:'https://economipedia.com/wp-content/uploads/dolar-1.jpg'});
// content.save({title:'solidario', price:242, thumbnail:'https://economipedia.com/wp-content/uploads/dolar-1.jpg'});
// content.save({title:'oficial', price:147.63, thumbnail:'https://economipedia.com/wp-content/uploads/dolar-1.jpg'});
// content.save({title:'cripto', price:340, thumbnail:'https://economipedia.com/wp-content/uploads/dolar-1.jpg'});


//content.getAll()

//content.getById(1)

// content.deleteById(3) 

// content.deleteAll()