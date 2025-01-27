let currentStep = 0;
const steps = document.querySelectorAll(".step");
function showStep(step) {
steps.forEach((el, i) => {
el.classList.toggle("active", i === step);
el.classList.toggle("completed", i < step);
});
document.getElementById("prevBtn").disabled = step === 0;
document.getElementById("nextBtn").innerText = step === steps.length - 1 ? "Finish" : "Next";
}
function changeStep(step) {
currentStep += step;
if (currentStep < 0) currentStep = 0;
if (currentStep >= steps.length) currentStep = steps.length - 1;
showStep(currentStep);
}
showStep(currentStep);