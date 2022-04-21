let bookManager = new BookManager();
bookManager.showListProduct();
function addBook(){
    let id = prompt("id sach");
    while(true){
        if(id.length<=5 && id[0] >=1 && id[0] <= 5){
            break;
        }else {
            id = prompt('nhap lai id')
        }
    }
    let name = prompt('ten sach');

    let year = prompt('nam xuat ban')
    while(true){
        if(year.length<=4 ){
            break;
        }else {
            year = prompt('nhap lai nam')
        }
    }
    let number = prompt('so luong')
    bookManager.add(id,name,year,number);
    bookManager.setStatus();
    alert('Them thanh cong');
}
function borrow(){
    let name = prompt('Ten sach can muon');
    let number = +prompt('So sach can muon');
    bookManager.borrowBook(name,number);
    bookManager.setStatus();
    bookManager.showListProduct();

}
function maxBook(){
    bookManager.findMaxBook();
}