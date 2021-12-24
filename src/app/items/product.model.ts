export class Product{
    public name:string;
    public count:number;
    public imagePath:string;
    public visible:string = "hidden";
    constructor(name:string,count:number,imagePath:string){
        this.name=name;
        this.count=count;
        this.imagePath=imagePath;
    }
}