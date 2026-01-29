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

document.addEventListener("mousemove", function(e) {
const sparkle = document.createElement("div");
sparkle.className = "sparkle";
document.body.appendChild(sparkle);



sparkle.style.left = e.clientX + "px";
sparkle.style.top = e.clientY + "px";



setTimeout(() => {
sparkle.style.transition = "transform 0.5s ease, opacity 0.5s ease";
sparkle.style.transform = `translate(${Math.random()*30-15}px, ${Math.random()*30-15}px)`;
sparkle.style.opacity = 0;
}, 0);



setTimeout(() => {
sparkle.remove();
}, 500);
});