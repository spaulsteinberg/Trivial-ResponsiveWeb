//filter for european countries over 1 million people
app.filter("myCustomFilter", function(){
    //x is the array item thats passed in the 'in' clause
    return function(x){
        if (x.continent === "Europe" && x.population > 1000000){
            return (x.capital + ", " + x.country);
        };
    };
});