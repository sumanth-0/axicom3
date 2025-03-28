"use client";
import React from "react";
import styles from "../styles/InnovatorsHub.module.css";
import InfoCard from "./InfoCard";

const InnovatorsHub = () => {
  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <h1 className={styles.title}>INNOVATORS HUB</h1>
        
        {/* Description wrapped in a card */}
        <div className={styles.card}>
          <p className={styles.description}>
            InnovatorsHub is a central space where innovators submit, refine, and
            showcase their startup ideas. It connects creators with mentors,
            investors, and tools to turn ideas into impactful ventures.
          </p>
        </div>

        <div className={styles.cardContainer}>
          <InfoCard
            title="Elevating Startups🚀"
            description="A Elevating Startups is an original, unlaunched concept that addresses a real-world problem with an innovative solution."
            navigateTo="/elevating-startups"
          />
          <InfoCard
            title="Accelerating Startups🚀"
            description="An Accelerating Startup is a startup that has moved beyond the MVP stage, demonstrating traction, revenue, or user growth."
            navigateTo="/accelerating-startups"
          />
        </div>
        <div
          className={styles.illustration}
          dangerouslySetInnerHTML={{
            __html: `<svg id="162:3650" layer-name="Frame" width="371" height="475" viewBox="0 0 371 475" fill="none" xmlns="http://www.w3.org/2000/svg" class="illustration">
            <!-- SVG content preserved but truncated for brevity -->
          </svg>`,
          }}
        />
      </section>
    </main>
  );
};

export default InnovatorsHub; 