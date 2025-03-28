import React from "react";
import styles from "./ProjectDetailsInput.module.css";

export const ProjectDetailsInput = () => {
  return (
    <section className={styles.inputSection}>
      <h3 className={styles.title}>Any Other Requirements, Specify here:</h3>
      <input
        type="text"
        className={styles.input}
        aria-label="Additional requirements"
      />
    </section>
  );
}; 