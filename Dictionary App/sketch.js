let input = document.querySelector(".text-input");
let button = document.querySelector(".button");
let meaning = document.querySelector(".meanings");
let suggestion = document.querySelector("#suggestions");

let URL = " https://api.dictionaryapi.dev/api/v2/entries/en/";

var str = "";
function getMeaning(word){
    fetch(URL+word).then(res=>res.json()).then((res)=>{
        if(res.title){
            meaning.innerHTML = res.title;
        } else{
            res[0].meanings.forEach(mean=>{
                let pos = mean.partOfSpeech;
                let defs = mean.definitions;
                str += `<div class="meaning"><div class='POS'>${capitalize(pos)}</div>`;
                defs.forEach(def=>{
                  str += `
                    <ul>
                     <li>
                      <div>
                       <div class="definition">${capitalize(def.definition)}</div> 
                       <div class="example">${example(capitalize(def.example)) || ""}</div>
                    </ul>
                  `;
                })
                str += "</div>"
            })
        }
        meaning.innerHTML = str;
        str = "";
    }
    )
}

function capitalize(string){
    return string && string.charAt(0).toUpperCase() + string.substr(1);
}

function example(example){
    return example && "Example:- " + example 
}

button.onclick = function(){
    let word = input.value.trim();
    getMeaning(word)
}