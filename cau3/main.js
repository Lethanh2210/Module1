let bookManager = new BookManager();
bookManager.showListProduct();
function addBook(){
    let id = prompt("id sach");
    let name = prompt('ten sach');
    let year = prompt('nam xuat ban')
    let number = prompt('so luong')
    bookManager.add(id,name,year,number);
}