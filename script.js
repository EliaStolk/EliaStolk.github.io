function filterSelection(catagory) {
    const projectList = document.querySelectorAll(".project-card");
    if(catagory === 'all') {
        projectList.forEach(project => {
            project.style.display = 'block';
        })
    } else {
        projectList.forEach(project => {
            if(project.classList.contains(catagory)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        })
    }
}