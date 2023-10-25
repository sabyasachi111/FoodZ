


let card=document.getElementById('card-list');//getting the id of crad list Container to populate all the result.
const favocradList=document.getElementById('FavCard-list');
//when Serach by Meal Name and clicked on Search icon.
function Search(){
    let input=document.getElementById('search-input').value;
    //console.log(input);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
    .then(function(responce){  //getting the responce and converting to JSON .
        return responce.json();
    })
    .then(function(data){
        console.log(data);
        searchResultDelegation(data); // passing the JSON data to searchResultDelegation().
    })
}



function searchResultDelegation(Data){
   
    let CradData='';
  
    Data.meals.map((value)=>{  //mapping all objects in the meals array
        CradData+=` 
        <div class="card-body" id="${value.idMeal}">
            <div class="Meals-img">
               <img src="${value.strMealThumb}" alt="${value.strMeal}">
            </div>
            <div class="card-content">
                <p class="text" ><strong>Name:${value.strMeal}</strong></p>
                <p class="text" >Meal Type:${value.strArea}</p>
                <p class="textMealInfo" id>Meal ID:${value.idMeal}</p>
                </div>
                <div class="btn">
                     
                <button id="viewBtn" data-id="${value.idMeal}" class="view-btn-class" onclick="ViewDetails()">View Details</button>    
                <button id="favBtn" data-id="${value.idMeal}" class="Favorite-btn-class" onclick="Favorite()">Add to Favorite</button>
           
               </div>
            </div>
        
    
     `;
   
            
    });
    card.innerHTML=CradData; 
   
  
}


   





function ViewDetails(){
    const ViewBtn=document.getElementById('viewBtn');
    const MealID=ViewBtn.getAttribute('data-id');
    getSingleMealByID(MealID);
}


function getSingleMealByID(MealID){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealID}`)
    .then((responce)=>{
        return responce.json()
    }).then((data)=>{
        console.log(data);
        let CradData='';
            data.meals.map((value)=>{
                        CradData+=` <div class="details-card-body">
                        <div class="View-Meals-img">
                            <img src="${value.strMealThumb}">
                        </div>
                        <div class="Meals-Details">
                             <h1>${value.strMeal}</h1>
                             <h3>${value.strArea}</h3>
                            
                        </div>
                        <h2>Ingrediants</h2>
                        <div class="Ingrediants">
                           
                           <div class="ingrediants-list">${value.strIngredient1}</div>
                           <div class="ingrediants-list">${value.strIngredient2}</div>
                           <div class="ingrediants-list">${value.strIngredient3}</div>
                           <div class="ingrediants-list">${value.strIngredient4}</div>
                           <div class="ingrediants-list">${value.strIngredient5}</div>
                           <div class="ingrediants-list">${value.strIngredient6}</div>
                           <div class="ingrediants-list">${value.strIngredient7}</div>
                           <div class="ingrediants-list">${value.strIngredient8}</div>
                           <div class="ingrediants-list">${value.strIngredient9}</div>
                           <div class="ingrediants-list">${value.strIngredient10}</div>
                           <div class="ingrediants-list">${value.strIngredient11}</div>
                           <div class="ingrediants-list">${value.strIngredient12}</div>
                           <div class="ingrediants-list">${value.strIngredient23}</div>
                           <div class="ingrediants-list">${value.strIngredient14}</div>
                           <div class="ingrediants-list">${value.strIngredient15}</div>
                           <div class="ingrediants-list">${value.strIngredient16}</div>
                           
                        </div>
                        <div class="instruction">
                           <h2><strong>Instructions:</strong></h2>
                           <p>
                               ${value.strInstructions}
                           </p>
                        </div>
                        <div class="More-Details">
                           
                           <a href=""><img src="root/youtube.svg"></a>
                           <h2>you can access the playList for this meal in You Tube</h2>
                           
                        </div>
                        <div class="Back-btn-container">
                        <a href="index.html"><button type="button" id="back-btn">Back</button></a>
                        </div>
                       
                        
                        
                        
                    </div>`;
                    
            });
            card.innerHTML=CradData; 
    });
}

let MyFavoriteList=[
    {
    idMeal:"52795",
    strMeal:"Chicken Handi",
    strArea:"Indian",
    strMealThumb: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg"
    },
    
    {
     idMeal:"52944",
    strMeal:"Escovitch Fish",
    strArea:"Jamaican",
    strMealThumb: "https://www.themealdb.com/images/media/meals/1520084413.jpg"
    }
    ,
    {
      idMeal:"52795",
    strMeal:"Tzatziki Burgers",
    strArea:"Greek",
    strMealThumb:"https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg"
    
    }
    ,
    {
    idMeal:"52806",
    strMeal:"Tandoori chicken",
    strArea:"Indian",
    strMealThumb: "https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg"
    }
    ];

function Favorite(){
  
console.log("listning");
const FavBtn=document.getElementById('favBtn');
const MealID=FavBtn.getAttribute('data-id');
console.log(MealID);
addFaborite(MealID);
 
  
}

function addFaborite(MealID){
   if(MyFavoriteList.some(meals=>meals.idMeal===MealID)){
    
   }else{  //add Meals to favorite
    console.log('False');
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealID}`)
    .then((response)=>{
        return response.json()
    }).then((data)=>{
        data.meals.map((i)=>{
            MyFavoriteList.push({
                idMeal:`${i.idMeal}`,
                strMeal:`${i.strMeal}`,
                strArea:`${i.strArea}`,
                strMealThumb:`${i.strMealThumb}`
                });
                
                MyFavoriteList.map((value)=>{
                    console.log(value.strMeal); 
                  }) 
        });
    })
      
      

   }
   let favcard='';
    MyFavoriteList.map((Item)=>{
        favcard+=`<div class="favorite-meal-card">
                    
        <div class="fav-card-body" id="${Item.idMeal}">
            <div class="Meals-img">
            <img src="${Item.strMealThumb}" alt="${Item.strMeal}">
        </div>
            <div class="card-content">
                <p class="text" ><strong>Name:${Item.strMeal}</strong></p>
                <p class="text" >Meal Type:${Item.strArea}</p>
                <p class="textMealInfo" id>Meal ID:${Item.idMeal}</p>
            </div>
         </div>
     </div>`;
    })
    
    favocradList.innerHTML=favcard;
}

function ShowFavorite(){
    let favcard='';
    MyFavoriteList.map((Item)=>{
        favcard+=`<div class="favorite-meal-card">
                    
        <div class="fav-card-body" id="${Item.idMeal}">
            <div class="Meals-img">
            <img src="${Item.strMealThumb}" alt="${Item.strMeal}">
        </div>
            <div class="card-content">
                <p class="text" ><strong>Name:${Item.strMeal}</strong></p>
                <p class="text" >Meal Type:${Item.strArea}</p>
                <p class="textMealInfo" id>Meal ID:${Item.idMeal}</p>
            </div>
         </div>
     </div>`;
    })
    //console.log(favcard);
    favocradList.innerHTML=favcard;
}