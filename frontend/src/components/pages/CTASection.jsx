"use client";
import React from "react";
import styles from "../styles/InputDesign.module.css";
import CTAButton from "./CTAButton";

const CTASection = ({ title, description, buttonText, variant = "light" }) => {
  const sectionClass =
    variant === "light" ? styles.lightSection : styles.darkSection;
  const descriptionClass =
    variant === "light" ? styles.lightDescription : styles.darkDescription;

  return (
    <section className={sectionClass}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <p className={descriptionClass}>{description}</p>
        <CTAButton
          text={buttonText}
          variant={variant === "light" ? "primary" : "secondary"}
        />
      </div>
    </section>
  );
};

export default CTASection; 