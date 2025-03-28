import React from "react";
import styles from "./CategoryCard.module.css";

function CategoryCard({ icon, title, description }) {
  return (
    <article className={styles.categoryCard}>
      <i className={styles[icon]} />
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardDescription}>{description}</p>
    </article>
  );
}

export default CategoryCard; 