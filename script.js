
fetch(`https://api.openbrewerydb.org/v1/breweries`)
    .then(function(responce){
        return responce.json();
    })
    .then(function(data){
        Show(data);
    })
    //when Page loads Show function will map all the data from API to Page.
    function Show(Data){
        console.log(Data);
        let CradData='';
        let card=document.getElementById('card-list');
        Data.map((value)=>{
            CradData+=` <div class="card-body">
            <div class="card-content">
            <p class="text"><strong>Name:${value.name}</strong></p>
                                <p class="text" >Address:${value.address_1}</p>
                                <p class="text">Brewery Type:${value.brewery_type}</p>
                            </div>
                            <div class="btn">
                            <a href="meals.html"><button id="view-details-btn" >View Details</button></a>
                            
                            <button id="favorite-btn" onclick="addFavorite()">Add to Favorite</button>
                            
                            </div>
            
            </div>`;
    
        });
        console.log(CradData);
        card.innerHTML=CradData
    
    }



//when Serach by key Word and clicked on Search icon.
function Search(){
    let input=document.getElementById('search-input').value;
    console.log(input);
    fetch(`https://api.openbrewerydb.org/v1/breweries?by_name=${input}&per_page=100`)
    .then(function(responce){
        return responce.json();
    })
    .then(function(data){
        searchResultDelegation(data);
    })
}



function searchResultDelegation(Data){
    console.log(Data);
    let CradData='';
    let card=document.getElementById('card-list');
    Data.map((value)=>{
        CradData+=` <div class="card-body">
        <div class="card-content">
        <p class="text"><strong>Name:${value.name}</strong></p>
                            <p class="text" >Address:${value.address_1}</p>
                            <p class="text">Brewery Type:${value.brewery_type}</p>
                        </div>
                        <div class="btn">
                        <a href="meals.html"><button id="view-details-btn" >View Details</button></a>
                        
                        <button id="favorite-btn" onclick="addFavorite()">Add to Favorite</button>
                        
                        </div>
        
        </div>`;
    });
    card.innerHTML=CradData;    
}

let favo='';

function addFavorite(){
  console.log("listning");
  localStorage.setItem('favorite','My Card');
  
}

