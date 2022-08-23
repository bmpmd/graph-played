interface GraphModelInterface {
    name: string;
    value: number;
}

export class GraphModel {
   
    name: string;
    value: number;

    constructor(name:string, value:number) {
     this.name = name; 
     this.value = value; 

    }
}

