
let cardsBtn = Array.from(document.querySelectorAll('.cards .card .btn'));
let cardsTitle = Array.from(document.querySelectorAll('.cards .card .content h3'));
let showCard = document.querySelector('.show-card p');
let btnTotalPrice = document.querySelector('.show-card .price span');
let cards = Array.from(document.querySelectorAll('.cards li'));
let totalPrice = 0;

cards.forEach(function (card) {
    cardsBtn.forEach(function (btn) {
        btn.onclick = function () {
            console.log(btn);

            totalPrice += parseInt(card.getAttribute('price'));

            for (let y = 0; y < cardsTitle.length; y++) {
                    console.log(cardsTitle[y]);
                    showCard.innerHTML += ' - ' + cardsTitle[y].textContent + '<br>';
            }
            btnTotalPrice.innerHTML = totalPrice;
        }

    })
})
