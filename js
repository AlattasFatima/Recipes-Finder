const input = document.getElementById('inputs')
    const btn = document.getElementById('button')
    const container = document.getElementById('container')

    async function getRecipes(){  
        
        clearBox();
        let ingredients = input.value
        const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=ba74923736974898a4dd01f03046d4dc`
        const res = await fetch(url)
        const json = await res.json()

        for (let i = 0; i < json.length; i++) {
            let recipe = json[i]
            let title = document.createElement('p')
            let br = document.createElement('br')
            let image = document.createElement('img')
            title.innerText = recipe.title
            container.appendChild(title);
            container.appendChild(br);
            image.image = recipe.image
            container.appendChild(image);
          }//for loop
          container
    }

        function clearBox(){
            container.innerHTML = "";
        }

    btn.addEventListener('click', getRecipes)

    const button = document.getElementById("mode");
const body = document.getElementById("main");
const navBar = document.getElementById("nav");
const navText = document.getElementById("text");
const foodBTN = document.getElementById("foodBtn");


// night mode function
let mode = "light";
function switchMode() {
  console.log("hi");
  if (mode === "light") {
    mode = "night";
    navBar.style.background = "#5C5470";
    body.style.background = "#B9B4C7";
    navText[i].style.color = "white";
    for (let i = 0; i < navText.length; i++) {
      navText[i].style.color = "white";
    }
  } else {
    mode = "light";
    nav.style.background = "darkseagreen";
    body.style.background = "whitesmoke";
    navText.style.color = "black";
    for (let i = 0; i < navText.length; i++) {
      navText[i].style.color = "black";
    }
  }
}
button.addEventListener("click", switchMode);
