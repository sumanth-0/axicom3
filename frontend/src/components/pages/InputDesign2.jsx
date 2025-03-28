import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './InputDesign.module.css';
import { SidebarNav } from '../layout/SidebarNav';
import { TopBar } from '../layout/TopBar';

function InputDesign2() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [userName] = useState('Sumanth');

  useEffect(() => {
    // Load projects from localStorage when component mounts
    const loadProjects = () => {
      const savedProjects = JSON.parse(localStorage.getItem('projects') || '[]');
      // Sort projects by creation date, newest first
      const sortedProjects = savedProjects.sort((a, b) => 
        new Date(b.createdAt) - new Date(a.createdAt)
      );
      setProjects(sortedProjects);
    };

    loadProjects();
    // Add event listener for storage changes
    window.addEventListener('storage', loadProjects);
    return () => window.removeEventListener('storage', loadProjects);
  }, []);

  const handleViewDetails = (project) => {
    // Store the selected project in localStorage
    localStorage.setItem('currentProject', JSON.stringify(project));
    // Navigate to project details page
    navigate('/project-details');
  };

  const handleCreateProject = () => {
    navigate('/innovators-hub');
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className={styles.layout}>
        <SidebarNav />
        <main className={styles.mainContent}>
          <TopBar />
          <div className={styles.container}>
            <div className={styles.header}>
              <h1 className={styles.title}>Welcome, {userName}!</h1>
              <button onClick={handleCreateProject} className={styles.createButton}>
                Create New Project
              </button>
            </div>

            <div className={styles.projectsSection}>
              <h2 className={styles.sectionTitle}>My Projects</h2>
              <div className={styles.tableContainer}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Project Name</th>
                      <th>Category</th>
                      <th>Stage</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project) => (
                      <tr key={project.id}>
                        <td>{project.name}</td>
                        <td>{project.category}</td>
                        <td>{project.stage}</td>
                        <td>
                          <span className={`${styles.statusBadge} ${styles[project.status.toLowerCase()]}`}>
                            {project.status}
                          </span>
                        </td>
                        <td>
                          <button
                            onClick={() => handleViewDetails(project)}
                            className={styles.viewButton}
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                    {projects.length === 0 && (
                      <tr>
                        <td colSpan="5" className={styles.noProjects}>
                          No projects found. Create your first project!
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default InputDesign2; 