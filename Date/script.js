const form = document.querySelector("form");
const dateInput = document.querySelector("#date");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const selectedDate = dateInput.value;

    if(!selectedDate){
        alert("Please select a date before submitting.");
        return;
    }
    const dateObject = new Date(selectedDate);
    const options = {year: "numeric", month: "long", day: "numeric" };
    const formatDate = dateObject.toLocaleDateString(undefined,options);

    alert(`You selected: ${formatDate}`);
});
