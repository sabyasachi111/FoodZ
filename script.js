/*
let searchinput=document.getElementById("search-input");

searchinput.addEventListener("keypress",(event)=>{
    if(event){
        
        console.log(input);
    }
    
});

//url='www.themealdb.com/api/json/v1/1/search.php?s='+input;*/


function Search(){
    let input=document.getElementById('search-input').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        .then(function (res) {
            return res.json(); // Parse the response as JSON
        })
        .then(function (data) {
            console.log(data); // Do something with the JSON data
            //show(data);
            console.log(data[2]);
            
        })
        .catch(function (error) {
            console.error('Error:', error);
        });
}

/*function show(objData){
        let d=document.getElementById('result');
        for(Meals in objData){
            console.log(Meals.strMeal);
        }
       // d.innerHTML=`<hi>${element.strMeal}</hi>`;
        
}*/


/*fetch('www.themealdb.com/api/json/v1/1/search.php?s=chicken').then(function(res){
    console.log(res);
    return res.json();
})*/

/*function api() {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
        .then(function (res) {
            return res.json(); // Parse the response as JSON
        })
        .then(function (data) {
            console.log(data); // Do something with the JSON data
        })
        .catch(function (error) {
            console.error('Error:', error);
        });
}

api();*/