
class Car{
    Brand: string;
    Year: number;
    Ower : string;

    constructor(brand: string, year: number, ower: string){
        this.Brand = brand;
        this.Year = year;
        this.Ower = ower;
    }
    Display(){
        console.log(this.Brand);
        console.log(this.Year);
        console.log(this.Ower);
    }
}
//change hello.ts 5


let mes = new Car("Mescedess",2015, "Minh");
mes.Display();

