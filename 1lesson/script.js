document.addEventListener("DOMContentLoaded", function() {
    // Your script code here
    const superLink = document.getElementById("super_link");
    console.log(superLink);

    const cardLinks = document.querySelectorAll(".card-link");
    cardLinks.forEach(link => {
        link.textContent = "ссылка";
    });

    const cardBodyLinks = document.querySelectorAll(".card-body .card-link");
    console.log(cardBodyLinks);

    const elementWithDataNumber50 = document.querySelector("[data-number='50']");
    console.log(elementWithDataNumber50);

    console.log(document.title);

    const cardTitle = document.querySelector(".card-title");
    console.log(cardTitle.parentNode);

    const pTag = document.createElement("p");
    pTag.textContent = "Привет";
    const card = document.querySelector(".card");
    card.insertBefore(pTag, card.firstChild);

    const h6Tag = document.querySelector("h6");
    h6Tag.remove();
});
