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

        document.getElementById('book').innerHTML += html;
    }
    add(id,name,year,number){
        let book = new Book(id, name, year, number);
        this.books.push(book);
        this.showListProduct();
        this.clearInput();
    }
    clearInput(){
        document.getElementById('id').value = null
        document.getElementById('name').value = null
        document.getElementById('year').value = null
        document.getElementById('number').value = null
    }
}