
class Car{
    Brand: string;
    Year: number;
    Owner : string;

    constructor(brand: string, year: number, owner: string){
        this.Brand = brand;
        this.Year = year;
        this.Owner = owner;
    }
    Display(){
        console.log(this.Brand);
        console.log(this.Year);
        console.log(this.Owner);
    }
}
<<<<<<< HEAD
//change hello.ts 12
// change main branch
//change on branch beta 
=======
//change on anpha branch
//them dong vao hello.ts


>>>>>>> alpha

let mes = new Car("Mercedes",2015, "Tran Quang Minh");
mes.Display();

