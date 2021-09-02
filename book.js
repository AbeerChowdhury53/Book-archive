
// function for total search result
const getTotalResult = () => {
    const url = `http://openlibrary.org/search.json?q=${getSearchvalue.value}`  // dinamic URL for search

    fetch(url)
    .then(res => res.json())
    .then( data => setResult(data.numFound))
   }
//Function for Set result
     const setResult = (rownum) =>{
       if (rownum === 0 ){
           const resultSection =document.getElementById('result')
           resultSection.innerHTML='';
           const div = document.createElement('div')
           div.classList.add("srcResult")
           resultSection.appendChild(div)
            //inner html for No data Found
           div.innerHTML=`
           <h6 class="text-center">No Data Found</h6>` 
       }
       else{ const resultSection =document.getElementById('result')
       resultSection.innerHTML='';
       const div = document.createElement('div')
       div.classList.add("srcResult")
       resultSection.appendChild(div)
        //inner html for search Result
       div.innerHTML=`
       <h6 class="text-center">Total Search Result: ${rownum}, Displaying Maximum 30 Result </h6>` }
 };
   
   

   
// for display value   
   
    const getSearchvalue = document.getElementById('search-fild');
    const buttn = document.getElementById('button-addon2');

    const getvalue = () => {
    const url = `http://openlibrary.org/search.json?q=${getSearchvalue.value}`  // dinamic URL for Image

    fetch(url)
    .then(res => res.json())
    .then( data =>    returnBook(data.docs.slice(0,30)))   //console.log(data.docs.slice(0,30)))
   }

      // function for book data 
       const returnBook =(data) =>{
       const getdesplay = document.getElementById('displaySection')

       getSearchvalue.value='';   //For remove search field value
       getdesplay.innerHTML='';   //For remove previous search result

    data.forEach(element => {
        // const imgURL=`https://covers.openlibrary.org/b/id/${element.cover_i}-L.jpg`
           const imgURL=`https://covers.openlibrary.org/b/id/${element.cover_i}-M.jpg`      
        const div = document.createElement('div')
        getdesplay.appendChild(div)
        div.classList.add("displayBook")  // add calss in div 
        //inner html for display book information
        console.log(element)
        div.innerHTML=`
        <img class="w-50" src="${imgURL}"alt="">
        <h3>Book Name: ${element.title}</h3>
        <h5>Book Writer Name: ${element.author_name}</h5>
        <h5>Book Publisher: ${element.publisher}</h5>
        <h6>Book Publish Year: ${element.first_publish_year}</h6>`    
       });
   }
  


  