document.addEventListener("DOMContentLoaded", function () {
    const buttonsContainer = document.getElementById("buttons-container");
    const totalPages = 5;

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.addEventListener("click", function () {
            window.location.href = `page${i}/page${i}.html`;
        });
        buttonsContainer.appendChild(button);
    }
});
