//TODO callback function reading/maybe asynch
//TODO append unique list items


let books = '';
let list = document.querySelector('#list ol');

Papa.parse('data/goodreads_library_export.csv', 
    {   
        header:true,
        download:true,
        complete: function(results){
            books = results.data;
            console.log(results);
            console.log(books);
        }
    }
)
console.log(books);
let btn = document.querySelector('#populate');
btn.addEventListener('click',()=>{
    //length -1, final row was an undefined error
    for (let i=0;i<books.length-1;i++){
        //create new li element inside for loop, otherwise it will be overwritten each loop
        //TODO read mdn doc for appendchild
        let listItem = document.createElement('li');
        listItem.textContent = books[i].Title + ', ' + books[i].Author + 
        ', ' + books[i]['My Rating'];
        
        list.appendChild(listItem);
    
        
    }
    

})

for (let i=0;i<books.length;i++){
    console.log(i);
    listItem.textContent = books[i].Title + ', ' + books[i].Author + 
    ', ' + books[i]['My Rating'];
    list.appendChild(listItem);

    console.log(listItem);
}
