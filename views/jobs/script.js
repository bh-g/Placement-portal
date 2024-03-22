document.addEventListener("DOMContentLoaded", function () {
    // Array of flashcard data
    const flashcardsData = [
        {
            companyName: "Company A",
            postedDate: "January 1, 2024",
            deadline: "January 15, 2024",
            cutoff: "7.5 CGPA",
            branchesAllowed: "CSE, ECE",
            stipend: "$1000 per month"
        },
        {
            companyName: "Company B",
            postedDate: "February 1, 2024",
            deadline: "February 15, 2024",
            cutoff: "8.0 CGPA",
            branchesAllowed: "EEE, Mech",
            stipend: "$1200 per month"
        },
        {
            companyName: "Company C",
            postedDate: "March 1, 2024",
            deadline: "March 15, 2024",
            cutoff: "7.8 CGPA",
            branchesAllowed: "CSE, Mech",
            stipend: "$1100 per month"
        }
    ];

    const flashcardContainer = document.getElementById("flashcard-container");

    // Function to generate HTML for flashcards
    function generateFlashcards() {
        flashcardsData.forEach(function (flashcardData) {
            const cardWrapper = document.createElement("div");
            cardWrapper.classList.add("card-wrapper");

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            const cardFront = document.createElement("div");
            cardFront.classList.add("card-front");
            const cardBack = document.createElement("div");
            cardBack.classList.add("card-back");

            // Front side content
            cardFront.innerHTML = `
                <strong>${flashcardData.companyName}</strong>
                <p>Posted on: ${flashcardData.postedDate}</p>
                <p>Deadline to apply: ${flashcardData.deadline}</p>
                <p>Cutoff: ${flashcardData.cutoff}</p>
                <p>Branches allowed: ${flashcardData.branchesAllowed}</p>
                <p>Stipend: ${flashcardData.stipend}</p>
            `;

            // Back side content
            cardBack.innerHTML = `<button>Apply now</button>`;

            cardBody.appendChild(cardFront);
            cardBody.appendChild(cardBack);
            cardWrapper.appendChild(cardBody);
            flashcardContainer.appendChild(cardWrapper);
        });
    }

    // Call the function to generate flashcards
    generateFlashcards();
});

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("content").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("content").style.marginLeft = "0";

}