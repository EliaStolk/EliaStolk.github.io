function filterSelection(catagory) {
    const projectList = document.querySelectorAll(".project-card");
    if(catagory === 'all') {
        projectList.forEach(project => {
            project.style.visibility = 'visible';
        })
    } else {
        projectList.forEach(project => {
            if(project.classList.contains(catagory)) {
                project.style.visibility = 'visible';
            } else {
                project.style.visibility = 'hidden';
            }
        })
    }
}