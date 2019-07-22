let box = document.getElementsByClassName('card');
let mainCard = document.getElementById('card-main');
let close = document.getElementById('close');
let main = document.getElementById('box');


 function openNav() {
    document.getElementById("mySidepanel").style.width = "25vw";

  }

  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";

  }

close.addEventListener('click', ()=>{
    mainCard.style.display = 'none';
})

let products = JSON.parse(data);
let len = products.length;
let marker = 0;

/* converting the data from json into document elements*/
for (let i = 0; i<products.length; i+=3){
    let cardRow = document.createElement('div');
    cardRow.className = 'cardRow';
    for(let j = i; j<i+3; j++){
        if(marker < len){
            
            /* checking the star rating using the rating from the data */
            let rates = document.createElement('div');
            rates.className = 'star';
            for(let i=0; i<5; i++){
                let stars = document.createElement('span');
                stars.classList.add('fa');
                stars.classList.add('fa-star');
                rates.appendChild(stars);
            }
            for(let k=0; k<products[j].rating; k++){
                rates.childNodes[k].classList.add('checked');
            }
            
            /* creating and appending the product cards into the DOM */
            let card = document.createElement('div');
            card.className = "card";
            let prodImg = document.createElement('div');
            prodImg.className ="prodImg";
            prodImg.style.backgroundImage = `url(${products[j].image})`;
            card.appendChild(prodImg);
            card.innerHTML += `<div class="prodEtail">
                                    <p class="proName">${products[j].name}</p>
                                    <p class="price">&#8377 <span style="font-size: 30px;">${products[j].price}</span></p>
                                    <div class="star">
                                    star rating
                                    </div>
                                    <p style='display: none' class="disp">${products[j].description}</p>
                                </div>`
            card.childNodes[1].childNodes[5].innerHTML = rates.innerHTML;
            
            /* adding function for click response */
            card.addEventListener('click', function(){
                cardData = card.childNodes;
                document.getElementById('prodImg-main').style.backgroundImage = cardData[0].style.backgroundImage;
                document.getElementById('proName-main').innerText = cardData[1].childNodes[1].innerText;
                document.getElementById('rate').innerText = cardData[1].childNodes[3].childNodes[1].innerText;
                document.getElementById('star-main').innerHTML = cardData[1].childNodes[5].innerHTML;
                document.getElementById('disp-main').innerText = cardData[1].childNodes[7].innerText;
                mainCard.style.display = 'block';
            })
            cardRow.appendChild(card);
            marker++;
        }
        else{
            break;
        }
    }
    main.appendChild(cardRow);
}

