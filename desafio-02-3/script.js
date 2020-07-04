const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click", function(){
        const course = card.getAttribute("id");
        modalOverlay.classList.add("active");
        modalOverlay.querySelector("iframe").src=`https://rocketseat.com.br/${course}`;
        modalOverlay.classList.remove("maximize");

    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("iframe").src="";
})

document.querySelector(".max-modal").addEventListener("click", function(){    
    if(modalOverlay.classList.contains("maximize")) {
        modalOverlay.classList.remove("maximize");
    } else
    modalOverlay.classList.add("maximize");
})