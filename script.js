const projectList = document.querySelectorAll(".project-card");

function filterSelection(catagory) {
    
    projectList.forEach(project => {
            project.style.opacity = 0;
        })
    if(catagory === 'all') {
        projectList.forEach(project => {
            project.style.display = 'block';
            project.style.opacity = 1;
        })
    } else {
        projectList.forEach(project => {
            if(project.classList.contains(catagory)) {
                project.style.display = 'block';
                project.style.opacity = 1;
            } else {
                project.style.display = 'none';
            }
        })
    }
}

projectList.forEach(project => {
    project.addEventListener("animationend", project => {
        
    })
})

