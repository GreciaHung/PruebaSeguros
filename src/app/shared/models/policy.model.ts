export class Policy{
    
    constructor(
        public Id:number,
        public CustomerName:string,
        public Description:string,
        public TypeCover:string,
        public TypeRisk:string,
        public PercentageCoverage: number,
        public StartDate: Date,
        public EndDate: Date,
        public Price: number
        ){


    }
     


    
}