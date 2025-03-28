"use client";
import React from "react";
import styles from "../styles/InputDesign.module.css";

export const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.topNav}>
        <h1 className={styles.pageTitle}>Project Dashboard</h1>
        <div className={styles.topNavItems}>
          <button className={styles.navLink}>Dashboard</button>
          <button className={styles.navLink}>Settings</button>
          {/* Add more navigation links as needed */}
        </div>
      </div>
    </div>
  );
}; 