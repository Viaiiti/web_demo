
function searchMovie() {

    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let cards = document
        .querySelectorAll(".movie-card");

    for (let i = 0; i < cards.length; i++) {

        let title = cards[i]
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (title.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

function openPopup(title, image, rating, review){

    document.getElementById("moviePopup").style.display = "flex";

    document.getElementById("popupTitle").textContent = title;

    document.getElementById("popupImage").src = image;

    document.getElementById("popupRating").textContent = rating;

    document.getElementById("popupReview").textContent = review;
}

function closePopup(){

    document.getElementById("moviePopup").style.display = "none";
}


