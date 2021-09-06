
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
//sua gi day cho sung đột
//sua tren main
//okokokok 
let mes = new Car("Mercedes",2015, "Tran Quang Minh");

let mes = new Car("Mercedes",2021, "Tran Quang Minh");
let mes = new Car("Mercedes",2010, "Tran Quang Minh");


mes.Display();
