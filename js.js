//TODO callback function reading/maybe asynch
//TODO append unique list items
//TODO remove any with a rating of 0


let books = '';
let readBooks = [];
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
    //data source has a rating of 0 for unread books
    //length -1, final row in csv returns undefined
    for (let i=0;i<books.length-1;i++){
        if (books[i]['My Rating'] !== '0'){
            readBooks.push(books[i])
        }
    }  
    
    //b-a to sort books in descending order by rating
    readBooks.sort((a,b) => b['My Rating']-a['My Rating']);
    
    for (let i=0;i<readBooks.length;i++){
        //create new li element inside for loop, otherwise it will be overwritten each loop
        //TODO read mdn doc for appendchild
        let listItem = document.createElement('li');
        listItem.textContent = readBooks[i].Title + ', ' + readBooks[i].Author + 
        ', ' + readBooks[i]['My Rating'];
        
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
