const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".proj-card");


filterButtons.forEach(button => {
button.addEventListener("click", () => {
const filter = button.dataset.filter; 


projects.forEach(project => {

const categories = project.dataset.category.split(" ");



if (filter === "all" || categories.includes(filter)) {
project.style.display = "block";
} else {
project.style.display = "none";
}
});



filterButtons.forEach(btn => btn.classList.remove("active"));
button.classList.add("active");
});
});