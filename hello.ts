

class Car  {
    Brand: string;
    Year: number;

    constructor(brand: string, year: number){
        this.Brand = brand;
        this.Year = year;
    }
    Display(){
        console.log(this.Brand);
        console.log(this.Year);
    }
}

let mes = new Car("Mescedess",2015);
mes.Display();

