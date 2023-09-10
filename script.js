document.addEventListener('DOMContentLoaded', () => {
    const projectForm = document.getElementById('project-form');
    const projectList = document.getElementById('project-list');

    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const projectName = document.getElementById('project-name').value;
        const projectDescription = document.getElementById('project-description').value;

        
        const projectItem = document.createElement('li');
        projectItem.innerHTML = `<strong>${projectName}:</strong> ${projectDescription}`;

        
        projectList.appendChild(projectItem);

        
        document.getElementById('project-name').value = '';
        document.getElementById('project-description').value = '';
    });
});
