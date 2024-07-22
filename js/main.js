//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click' ,getDrink())

function getDrink(){
    let userInput = document.querySelector('input').value
    
    fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.drinks)

        if(data.drinks[0].strDrink == userInput){
            document.querySelector('h2').innerText = data.drinks[0].strDrink
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
            document.querySelector('h3').innerText = data.drinks[0].strInstructions

        }else{
            document.querySelector('h2').innerText = data.drinks[0].strDrink
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
            document.querySelector('h3').innerText = data.drinks[0].strInstructions
   
        }
    })
}

