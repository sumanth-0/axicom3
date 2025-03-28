import React from "react";
import styles from "./ProjectDetailsRequirements.module.css";

export const ProjectDetailsRequirements = () => {
  return (
    <aside className={styles.requirements}>
      <h3 className={styles.title}>REQUIREMENTS REQUEST</h3>
      <div className={styles.buttonContainer}>
        <button className={`${styles.button} ${styles.highlighted}`}>
          Resources
        </button>
        <button className={`${styles.button} ${styles.highlighted}`}>
          Funding
        </button>
        <button className={styles.button}>Workspaces</button>
        <button className={styles.button}>Mentorship</button>
      </div>
    </aside>
  );
}; 