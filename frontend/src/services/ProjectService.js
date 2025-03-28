import { toast } from 'react-toastify';

class ProjectService {
  static getProjects() {
    const savedProjects = localStorage.getItem('projects');
    return savedProjects ? JSON.parse(savedProjects) : [];
  }

  static createProject(projectData) {
    const projects = this.getProjects();
    const newProject = {
      id: Date.now(),
      ...projectData,
      status: 'In Progress',
      createdAt: new Date().toISOString(),
    };

    const updatedProjects = [...projects, newProject];
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    toast.success('Project created successfully!');
    return newProject;
  }

  static updateProject(projectId, updatedData) {
    const projects = this.getProjects();
    const updatedProjects = projects.map(project =>
      project.id === projectId ? { ...project, ...updatedData } : project
    );
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    toast.success('Project updated successfully!');
  }

  static deleteProject(projectId) {
    const projects = this.getProjects();
    const updatedProjects = projects.filter(project => project.id !== projectId);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    toast.success('Project deleted successfully!');
  }
}

export default ProjectService; 