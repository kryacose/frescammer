let box = document.getElementsByClassName('card');
let mainCard = document.getElementById('card-main');
let close = document.getElementById('close');

w3.slideshow('.slide', 3000);

for(let i=0; i<box.length; i++){
    box[i].addEventListener('click', function(){
        let details = box[i].childNodes[3].childNodes[1].childNodes;
        document.getElementById('prodImg-main').style.backgroundImage = box[i].childNodes[1].style.backgroundImage;
        document.getElementById('proName-main').innerText = details[1].innerText;
        document.getElementById('rate').innerText = details[3].childNodes[1].innerText;
        document.getElementById('star-main').innerHTML = details[5].innerHTML;
        document.getElementById('disp-main').innerText = details[7].innerText;
        mainCard.style.display = 'block';
    });
}

close.addEventListener('click', ()=>{
    mainCard.style.display = 'none';
})