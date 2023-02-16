//TODO callback function reading/maybe asynch
//TODO append unique list items
//TODO remove any with a rating of 0
//TODO put the event listener stuff into functions, all in an iife probably

//begin book code below

// let books = '';
// let readBooks = [];
// let list = document.querySelector('#list ol');

// const displayList = (()=>{
//     const filterReadBooks = ()=>{
//         //data source has a rating of 0 for unread books
//         //length -1, final row in csv returns undefined
//         for (let i=0;i<books.length-1;i++){
//             if (books[i]['My Rating'] !== '0'){
//                 readBooks.push(books[i])
//             }
//         }   

//     }
//     const sortReadBooks = (key)=>{
//         //b-a to sort books in descending order by rating
//         readBooks.sort((a,b) => b[key]-a[key]);
//     }
//     const renderList = () => {
//         for (let i=0;i<readBooks.length;i++){
//             //create new li element inside for loop, otherwise it will be overwritten each loop
//             //TODO read mdn doc for appendchild
//             let listItem = document.createElement('li');
//             listItem.textContent = readBooks[i].Title + ', ' + readBooks[i].Author + 
//             ', ' + readBooks[i]['My Rating'];
            
//             list.appendChild(listItem);   
//         }
//     }
//     //consider moving incoming data to own iife when changing to file upload. 
//     Papa.parse('data/goodreads_library_export.csv', 
//     {   
//         header:true,
//         download:true,
//         complete: function(results){
//             books = results.data;
//             console.log(results);
//             console.log(books);
//         }
//     }
// )

//     return{
//         filterReadBooks,
//         sortReadBooks,
//         renderList,
//     }
// })();


// console.log(books); //delete later
// 
// btn.addEventListener('click',()=>{
    
//     displayList.filterReadBooks();
//     displayList.sortReadBooks('My Rating');
//     displayList.renderList();
    
// })

//end book code above

//TODO make numbered spreadsheets
//add extra foreach level to account for stats array 

for (let i=1; i<44; i++){
    //accounts for up through 2023-02-14, spring season
    var stats = [];
    Papa.parse(`data/${i}.csv`, 
    {   
        header:true,
        download:true,
        complete: function(results){
            
            stats.push(results.data);
            // console.log(stats);
        }
    }
)
}

console.log(stats);
let championArray = {};
let championPickBanTotal = {};

let btn = document.querySelector('#populate');

btn.addEventListener('click', ()=>{

stats.forEach(season => {
    season.forEach(champ =>{
                // console.log(champ)
        
                if (champ.Champion in championArray){
                    // console.log(championArray[champ.Champion]);
                    championArray[champ.Champion].push(parseInt(champ.G))
                    // console.log(championArray)
                } else {
                    championArray[champ.Champion] = [parseInt(champ.G)]
                }
            });
});
console.log(championArray);
// console.log(championArray.Shen.reduce((accumulator, currentValue)=>accumulator + currentValue, 0));
Object.keys(championArray).forEach(key =>{
    let pickBanTotal = championArray[key].reduce((accumulator, currentValue)=>accumulator + currentValue, 0);
    championPickBanTotal[key] = pickBanTotal;
});

Object.keys(championPickBanTotal).forEach(key=>{
    //delete entries that are NaN - usually from an error in the data source

    if (Number.isNaN(championPickBanTotal[key])) delete championPickBanTotal[key];
})

console.log(championPickBanTotal);
// var totals = Object.values(championPickBanTotal);
// console.log(totals)
// totals.forEach(num=>{
//     if (Number.isNaN(num)) console.log('alret')
// })
console.log(Math.max(...Object.values(championPickBanTotal)))
// console.log(Object.values(championPickBanTotal))
});



// let spring2013 = [];

// let championArray = {
//     Shen: [],

// }
// Papa.parse('data/2013spring.csv', 
//     {   
//         header:true,
//         download:true,
//         complete: function(results){
//             stats = results.data;
//             spring2013 = stats;
//             console.log(stats);
//         }
//     }
// )

// btn.addEventListener('click',()=>{
    
    

//     spring2013.forEach(champ =>{
//         // console.log(champ)

//         if (champ.Champion in championArray){
//             console.log(championArray[champ.Champion]);
//             championArray[champ.Champion].push(parseInt(champ.G))
//             console.log(championArray)
//         } else {
//             championArray[champ.Champion] = [parseInt(champ.G)]
//         }
//     })
// });




//TODO review
// const list = document.querySelector('.list');
// const items = document.querySelectorAll('.list-item');

// let currentItem;
// let coordinates = [];
// let currentIndex;

// for (let i = 0; i < items.length; i++) {
//   const item = items[i];

//   item.addEventListener('dragstart', function () {
//     currentItem = this;
//     currentIndex = i;
//     setTimeout(function () {
//       item.style.display = "none";
//     }, 0);
//   });

//   item.addEventListener('dragend', function () {
//     setTimeout(function () {
//       currentItem.style.display = "block";
//       currentItem = null;
//     }, 0);
//   });

//   item.addEventListener('dragover', function (e) {
//     e.preventDefault();
//   });

//   item.addEventListener('dragenter', function (e) {
//     coordinates[i] = e.clientY;
//   });

//   item.addEventListener('drop', function () {
//     if (currentItem !== this) {
//       const direction = (coordinates[currentIndex] < e.clientY) ? 1 : -1;
//       list.insertBefore(currentItem, direction === 1 ? this.nextSibling : this);
//     }
//   });
// }
