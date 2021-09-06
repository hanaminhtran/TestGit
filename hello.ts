
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
//change hello.ts 12


let mes = new Car("Mercedes",2015, "Minh");
mes.Display();

