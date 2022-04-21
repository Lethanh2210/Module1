class Book{
    constructor(id,name,year,number) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.number = number;
        this.status = true;
    }
    setStatus(){
        if(this.number === 0){
            this.status = false;
        }
    }
}