document.addEventListener("DOMContentLoaded", function() {
    var searchInput = document.getElementById("search-input");
    var searchBtn = document.querySelector(".search-btn");
    var container = document.querySelector(".container");
    
    // Add event listener for input change
    // searchInput.addEventListener("input", function() {
    //     var searchValue = searchInput.value.toLowerCase().trim();
    //     var cards = document.querySelectorAll('.card');

    //     // Loop through all cards
    //     cards.forEach(function(card) {
    //         var nameElement = card.querySelector('#name');
    //         var name = nameElement.textContent.toLowerCase();
    //         // Show/hide card based on search input
    //         if (name.includes(searchValue)) {
    //             card.style.display = "block"; // Show the card
    //         } else {
    //             card.style.display = "none"; // Hide the card
    //             // card.remove;
    //         }
    //     });
    // });

    // Add event listener for search button click
    searchBtn.addEventListener("click", function() {
        var searchValue = searchInput.value.toLowerCase().trim();
        var cards = document.querySelectorAll('.card');

        // Loop through all cards
        cards.forEach(function(card) {
            var nameElement = card.querySelector('#name');
            var name = nameElement.textContent.toLowerCase();

            // Show/hide card based on search input
            if (name.startsWith(searchValue)) {
                container.style.flexDirection = "row";
                card.style.display = "block"; // Show the card
                // card.style.justifySelf = "flex-start";
                // card.style.alignSelf = "flex-start"; 
            } else {
                card.style.display = "none"; // Hide the card
            }
        });
    });
});
