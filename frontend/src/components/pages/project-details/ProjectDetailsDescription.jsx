import React from "react";
import styles from "./ProjectDetailsDescription.module.css";

export const ProjectDetailsDescription = ({ description }) => {
  return (
    <article className={styles.description}>
      <h3 className={styles.title}>Description</h3>
      <p className={styles.text}>{description}</p>
    </article>
  );
}; 