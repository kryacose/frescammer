let box = document.getElementsByClassName('card');
let mainCard = document.getElementById('card-main');
let close = document.getElementById('close');
let main = document.getElementById('box');


close.addEventListener('click', () => {
    mainCard.style.display = 'none';
})

let products = JSON.parse(data);
let len = products.length;
let marker = 0;

/* converting the data from json into document elements*/
for (let i = 0; i < products.length; i += 3) {
    let cardRow = document.createElement('div');
    cardRow.className = 'cardRow';
    for (let j = i; j < i + 3; j++) {
        if (marker < len) {

            /* creating and appending the product cards into the DOM */
            let card = document.createElement('div');
            card.className = "card";
            let prodImg = document.createElement('div');
            prodImg.className = "prodImg";
            prodImg.style.backgroundImage = `url(${products[j].image})`;
            card.appendChild(prodImg);
            let overlayImg = document.createElement('div');
            overlayImg.className = "overlayImg";
            prodImg.appendChild(overlayImg);
            let overlayTxt = document.createElement('div');
            overlayTxt.className = "overlayTxt";
            overlayTxt.innerText = `${products[j].name}`
            overlayImg.appendChild(overlayTxt);
            //prodImg.innerHTML += `<div class='overlayTxt'>${products[j].name}</div>`
            // let overlayTxt = document.createElement('div');
            card.innerHTML += `<div class="prodEtail">
                                    <p class="proName" style="display:none; ">${products[j].name}</p>
                                    <p class="price" style="display:none;"><span style="font-size: 30px;"></span></p>
                                    <p style='display: none' class="disp">${products[j].description}</p>
                                </div>`
            /* ${products[j].price} &#8377 */
            /* adding function for click response */
            card.addEventListener('click', function() {
                cardData = card.childNodes;
                document.getElementById('prodImg-main').style.backgroundImage = cardData[0].style.backgroundImage;
                document.getElementById('proName-main').innerText = cardData[1].childNodes[1].innerText;
                document.getElementById('disp-main').innerText = cardData[1].childNodes[5].innerText;
                mainCard.style.display = 'grid';
            })
            cardRow.appendChild(card);
            marker++;
        } else {
            break;
        }
    }
    main.appendChild(cardRow);
}