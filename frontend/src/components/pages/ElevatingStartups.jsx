"use client";
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "../styles/ElevatingStartups.module.css"; // Create this CSS file for styles

const ElevatingStartups = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleApply = () => {
    navigate("/elevating-startup-form"); // Navigate to the Startup Idea Form page
  };

  return (
    <div className={styles.container}>
      <h1>Welcome to the Elevating Startups Hub</h1>
      <p>
        This is the starting point of your startup journey. Whether you're a first-time founder or a passionate innovator, this space is built to capture your raw and unique ideas.
      </p>
      <h2>Why Submit Your Idea?</h2>
      <ul>
        <li>Get validation from experts and mentors</li>
        <li>Keep your idea secure and confidential</li>
        <li>Access early stage support and guidance</li>
        <li>Unlock potential for funding and incubation</li>
        <li>Start building your roadmap from concept to reality</li>
      </ul>
      <div className={styles.card}>
        <h2>Ready to take the first step?</h2>
        <p>Hit "Apply" and let the journey begin.</p>
        <button className={styles.button} onClick={handleApply}>Apply</button>
        <button className={styles.button}>Cancel</button>
        <p>Your Idea is Safe with Us. We ensure all submissions are confidential and only shared with authorized reviewers for assessment and support.</p>
      </div>
    </div>
  );
};

export default ElevatingStartups; 