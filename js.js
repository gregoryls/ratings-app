let books = '';
let list = document.querySelector('#list ol');
let listItem = document.createElement('li');
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
    for (let i=0;i<2;i++){
        listItem.textContent = books[i].Title + ', ' + books[i].Author + 
        ', ' + books[i]['My Rating'];
        list.appendChild(listItem);
    
        console.log(listItem);
    }
    

})

for (let i=0;i<books.length;i++){
    console.log(i);
    listItem.textContent = books[i].Title + ', ' + books[i].Author + 
    ', ' + books[i]['My Rating'];
    list.appendChild(listItem);

    console.log(listItem);
}
