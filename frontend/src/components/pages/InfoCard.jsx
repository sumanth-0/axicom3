import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "../styles/InfoCard.module.css"; // Ensure this path is correct

const InfoCard = ({ title, description, navigateTo }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleExploreMore = () => {
    navigate(navigateTo); // Navigate to the specified page
  };

  return (
    <article className={styles.card}>
      <div className={styles.iconContainer}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0013 21.3337V16.0003M16.0013 10.667H16.0146M29.3346 16.0003C29.3346 23.3641 23.3651 29.3337 16.0013 29.3337C8.63751 29.3337 2.66797 23.3641 2.66797 16.0003C2.66797 8.63653 8.63751 2.66699 16.0013 2.66699C23.3651 2.66699 29.3346 8.63653 29.3346 16.0003Z"
            stroke="#1E1E1E"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <button className={styles.button} onClick={handleExploreMore}>
          Explore More
        </button>
      </div>
    </article>
  );
};

export default InfoCard; 