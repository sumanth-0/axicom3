"use client";
import React from "react";
import styles from "../styles/InputDesign.module.css";

const CTAButton = ({ text, variant = "primary", onClick }) => {
  const buttonClass =
    variant === "primary" ? styles.primaryButton : styles.secondaryButton;

  return (
    <button className={buttonClass} onClick={onClick} type="button">
      <span>{text}</span>
      <i className={styles.arrowIcon} />
    </button>
  );
};

export default CTAButton; 