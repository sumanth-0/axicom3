import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectDetailsHeader } from './ProjectDetailsHeader';
import { ProjectDetailsTitle } from './ProjectDetailsTitle';
import { ProjectDetailsDescription } from './ProjectDetailsDescription';
import { ProjectDetailsRequirements } from './ProjectDetailsRequirements';
import { ProjectDetailsInput } from './ProjectDetailsInput';
import styles from './ProjectDetails.module.css';

const ProjectDetails = () => {
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProject = () => {
      const projectData = localStorage.getItem('currentProject');
      if (projectData) {
        setProject(JSON.parse(projectData));
      } else {
        navigate('/project-dashboard');
      }
      setLoading(false);
    };

    loadProject();
  }, [navigate]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (!project) {
    return null;
  }

  return (
    <main className={styles.container}>
      <ProjectDetailsHeader />
      <div className={styles.content}>
        <ProjectDetailsTitle title={project.name} category={project.category} />
        <div className={styles.mainSection}>
          <ProjectDetailsDescription description={project.description} />
          <ProjectDetailsRequirements />
        </div>
        <ProjectDetailsInput />
      </div>
    </main>
  );
};

export default ProjectDetails; 