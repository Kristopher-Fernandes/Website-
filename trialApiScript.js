const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const resultsContainer = document.getElementById("resultSection");

searchButton.addEventListener("click", async () => {
    const searchTerm = searchInput.value;
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);

    const data = await response.json();  
    // console.log(data.drinks);
    displayResults(data.drinks);
  });

function displayResults(drinks) {
  
    resultsContainer.innerHTML = "";        
    if (drinks) {
      drinks.forEach((drink) => {
        const resultBox = document.createElement("div");
        resultBox.classList.add("result-box");

        const drinkName = document.createElement("h3");
        drinkName.textContent = drink.strDrink;
        resultBox.appendChild(drinkName);
        
        const drinkImage = document.createElement("img");
        drinkImage.src = drink.strDrinkThumb;
        resultBox.appendChild(drinkImage);
        
        
        resultsContainer.appendChild(resultBox);
        // console.log(resultBox);
        showModal(resultBox,drink);
      });
      
        
    } else {
      resultsContainer.innerHTML = "No results found.";
    }
  }


  function showModal(rb,drink) {
  rb.onclick = () => {alert("Drink Name : "+drink.strDrink+"\n"+"Instructions : "+drink.strInstructions);}
  
  }
  

