"use client";
import React from "react";
import styles from "../styles/InputDesign.module.css";
import CTASection from "./CTASection";

const InputDesign = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <main className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          <CTASection
            title="Ready to Launch Your Startup?"
            description="Join thousands of founders who are transforming their ideas into reality."
            buttonText="Get Started Now"
            variant="light"
          />
          <CTASection
            title="Ready to Invest in the Next Big Thing?"
            description="Join Our Platform and Discover High-Growth Startups Today!"
            buttonText="Register Now"
            variant="dark"
          />
        </div>
      </main>
    </>
  );
};

export default InputDesign; 