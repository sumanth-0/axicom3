import React from "react";
import styles from "./SmartAISuggest.module.css";

function SmartAISuggest() {
  return (
    <div className={styles.smartAISuggest}>
      <div className={styles.suggestContent}>
        <div className={styles.suggestIcon}>💡</div>
        <div className={styles.suggestText}>
          <span className={styles.suggestTitle}>Smart AI Suggest</span>
          <p className={styles.suggestDescription}>
            Based on your project profile, we recommend focusing on funding opportunities first. This will help you secure the resources needed for development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SmartAISuggest; 