let books = [];
Papa.parse('data/goodreads_library_export.csv', 
    {   
        header:true,
        download:true,
        complete: function(results){
            books = results.data;
            console.log(results);
        }
    }
)