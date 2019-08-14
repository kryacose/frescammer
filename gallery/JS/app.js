let dell = document.getElementById('close');
let mainCard = document.getElementById('cardMain');
let cards = document.getElementsByClassName('card');

// dell.addEventListener('click', () => {
//     mainCard.style.display = 'none';
// });

//console.log(cards.length);
for(let i = 0; i < cards.length; i++){
    cards[i].addEventListener('click', () => {
        mainCard.style.backgroundImage = cards[i].childNodes[1].style.backgroundImage;
        //console.log(cards[i].childNodes[1].style.backgroundImage);
        mainCard.style.display = 'block';
    })
}