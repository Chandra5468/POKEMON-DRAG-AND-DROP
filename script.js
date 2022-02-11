const list_items = document.querySelectorAll(".list-item");

const pokemons = document.querySelectorAll(".type");

// const pokeballs = document.querySelectorAll(".pokeball")
const img = document.getElementsByClassName('pokeType')
let charizard = document.getElementById('charizard')
let greninja = document.getElementById('greninja')
let pikachu = document.getElementById('pikachu')


let draggedItem = null;
function myPlayFun() {
  document.getElementById('ball-1').style.animationPlayState = "running";
  document.getElementById('ball-2').style.animationPlayState = "running";
  document.getElementById('ball-3').style.animationPlayState = "running";
  

}

function myPauseFun(){
  document.getElementById('ball-1').style.animationPlayState = "paused";
  document.getElementById('ball-2').style.animationPlayState = "paused";
  document.getElementById('ball-3').style.animationPlayState = "paused";

}
function myplayAudio1(){
  document.getElementById('charizardSound').play();
}
function myplayAudio2(){
  document.getElementById('pikaAudio').play();
}


for (let i = 0; i < list_items.length; i++) {
  const item = list_items[i];

  item.addEventListener("dragstart", function (e) {
    console.log("dragstart", e);
    draggedItem = item;
    setTimeout(function () {
      item.style.display = "none";
    }, 0);
  });

  item.addEventListener("dragend", function (e) {
    console.log("dragend", e);
    setTimeout(function () {
      draggedItem.style.display = "block";
      draggedItem = null;
    }, 0);
  });

  for (let j = 0; j < pokemons.length; j++) {
    const pokemon = pokemons[j];
    // const pokeball = pokeballs[j]
    pokemon.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    pokemon.addEventListener("dragenter", function (e) {
      e.preventDefault();
      this.style.backgroundColor = "red";
    });
    pokemon.addEventListener("dragleave", function (e) {
      
    });
    pokemon.addEventListener("drop", function (e) {
      console.log("drop", e);
      const img1 = img[j];
      pokemon.append(draggedItem);
      draggedItem.style.visibility ='hidden'    //This will make pokeball not-visible
      this.style.backgroundColor = "lightgreen";
      
      // pokeball.style.visibility = 'hidden';
      // pokemon.style.backgroundImage = "url('caught.gif')"

      // if(this.className == "charizard"){
      //     charizard.src = 'caught.gif'
      // }
    //   if(greninja.className == "greninja"){
    //     greninja.src = 'caught.gif'
    //   }
    // if(pikachu.className == "pikachu"){
    //   pikachu.src = 'caught.gif'
    //  }

        // this.style['img'].src = 'caught.gif'
        // charizard.src = 'caught.gif'
        
        img1.style.visibility = 'hidden'

        this.style.backgroundImage = "url('caught.gif')"
        
        // this.style.src = 'caught.gif'
     
    })
  }
}
