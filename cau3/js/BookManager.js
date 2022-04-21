class BookManager{
    constructor() {
        this.books = [];
    }
    showListProduct(){
        let html = '';
        if(this.books.length === 0){
            html += '<tr>'
            html += '<td colspan="5">nodata</td>'
            html += '<tr>'
        }else {
            for (let i = 0; i < this.books.length; i++) {
                html += `<tr>`
                html += `<td>${this.books[i].id}</td>`
                html += `<td>${this.books[i].name}</td>`
                html += `<td>${this.books[i].year}</td>`
                html += `<td>${this.books[i].number}</td>`
                html += `<td>${this.books[i].status}</td>`
                html += `</tr>`
            }
        }

        document.getElementById('book1').innerHTML = html;
    }
    add(id,name,year,number){
        let book = new Book(id, name, year, number);
        this.books.push(book);
        this.showListProduct();
    }
    borrowBook(name,number){
        for (let i = 0; i < this.books.length; i++) {
            if(this.books[i].name === name){
                this.books[i].number -= number;
            }
        }
    }
    findMaxBook(){
        let max = this.books[0].number;
        for (let i = 1; i < this.books.length; i++) {
            if(this.books[i].number > max ){
                max = this.books[i].number;
            }
        }
        for (let i = 0; i < this.books.length; i++) {
            if(this.books[i].number === max){
                console.log(this.books[i]);
            }
        }

    }
    setStatus(){
        for (let i = 0; i < this.books.length; i++) {
            this.books[i].setStatus();
        }
    }

}