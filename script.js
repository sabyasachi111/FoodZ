



fetch('www.themealdb.com/api/json/v1/1/search.php?s=chicken').then(function (response) {
    return response.json();
}).then(function (data) {
    // Do something with data
    console.log(data);
});