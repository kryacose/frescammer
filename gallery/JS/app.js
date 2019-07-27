let box = document.getElementsByClassName('card');
let mainCard = document.getElementById('card-main');
let close = document.getElementById('close');
let main = document.getElementById('box');

let products = JSON.parse(data);
let len = products.length;
let marker = 0;

/* converting the data from json into document elements*/
for (let i = 0; i<products.length; i+=3){
    let cardRow = document.createElement('div');
    cardRow.className = 'cardRow';
    for(let j = i; j<i+3; j++){
        if(marker < len){   
            /* creating and appending the product cards into the DOM */
            let card = document.createElement('div');
            card.className = "card";
            let prodImg = document.createElement('div');
            prodImg.className ="prodImg";
            prodImg.style.backgroundImage = `url(${products[j].image})`;
            card.appendChild(prodImg);
            card.innerHTML += `<div class="prodEtail">
                                    <p class="proName">${products[j].name}</p>
                                </div>`; 
            cardRow.appendChild(card);
            marker++;
        }
        else{
            break;
        }
    }
    main.appendChild(cardRow);
}
