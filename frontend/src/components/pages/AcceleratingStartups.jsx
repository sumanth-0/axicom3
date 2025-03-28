"use client";
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "../styles/AcceleratingStartups.module.css"; // Create this CSS file for styles

const AcceleratingStartups = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleApply = () => {
    navigate("/accelerating-startup-form"); // Navigate to the Accelerating Startup Form page
  };

  return (
    <div className={styles.container}>
      <h1>Accelerating Startups</h1>
      <p>
        A growth stage project is a startup that has moved beyond the MVP phase, showing real user traction, revenue, or market validation. It focuses on scaling operations, expanding reach, optimizing offerings, and attracting larger investments to drive sustainable growth.
      </p>
      <h2>Why Submit Your Idea?</h2>
      <ul>
        <li>Get expert feedback and mentorship from industry professionals</li>
        <li>Access funding and connect with potential investors</li>
        <li>Secure legal and intellectual property assistance</li>
        <li>Join a vibrant community of innovators and entrepreneurs</li>
        <li>Showcase your idea and gain early visibility in the startup ecosystem</li>
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

export default AcceleratingStartups; 