import pokemons from "./pokemons.js";
console.log(pokemons);
const box=document.getElementById("box");


function kopiqil(malumot){
box.innerHTML="";
malumot.map((p) =>{
    const div=document.createElement("div");
    div.classList.add("card");
    div.innerHTML=`                <h1>${p.name}</h1>
                <img src="${p.img}<" alt="">
                <h2>${p.type}<</h2>
                <h4>${p.candy_count || 0}<</h4>
                <h4>${p.weight}<</h4>
                <p>${p.weaknesses}</p>`;
                box.appendChild(div);
});
}
kopiqil(pokemons);
 