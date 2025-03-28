import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProjectDetailsTitle.module.css";

export const ProjectDetailsTitle = ({ title, category }) => {
  const navigate = useNavigate();

  const handleUpgrade = () => {
    navigate('/upgrades');
  };

  return (
    <section className={styles.projectHeader}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.category}>{category}</p>
      </div>

      <button className={styles.upgradeButton} onClick={handleUpgrade}>
        <span>Upgrade</span>
        <div
          dangerouslySetInnerHTML={{
            __html: `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5 12H19.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.5 5L19.5 12L12.5 19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
          }}
        />
      </button>
    </section>
  );
}; 