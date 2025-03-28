"use client";
import React from "react";
import styles from "./ProjectDetailsHeader.module.css";

export const ProjectDetailsHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <div
          dangerouslySetInnerHTML={{
            __html: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_372_7202)">
                <path d="M23.5454 10.5735L15.9987 3.02686L8.45203 10.5735C4.29203 14.7335 4.29203 21.4935 8.45203 25.6535C10.532 27.7335 13.2654 28.7735 15.9987 28.7735C18.732 28.7735 21.4654 27.7335 23.5454 25.6535C27.7054 21.4935 27.7054 14.7335 23.5454 10.5735ZM15.9987 26.1202C13.8654 26.1202 11.852 25.2935 10.3454 23.7735C8.82536 22.2535 7.9987 20.2535 7.9987 18.1202C7.9987 15.9869 8.82536 13.9735 10.3454 12.4669L15.9987 6.80019V26.1202Z" fill="#00884A"/>
              </g>
              <defs>
                <clipPath id="clip0_372_7202">
                  <rect width="32" height="32" fill="white"/>
                </clipPath>
              </defs>
            </svg>`,
          }}
        />
        <h1 className={styles.logoText}>WeXtGen</h1>
      </div>

      <nav className={styles.navigation}>
        <a href="#" className={styles.navLink}>
          Mentorship
        </a>
        <a href="#" className={styles.navLink}>
          Jobs
        </a>
        <a href="#" className={styles.navLink}>
          Funding
        </a>
        <a href="#" className={styles.navLink}>
          Workspaces
        </a>
      </nav>

      <div
        className={styles.avatar}
        dangerouslySetInnerHTML={{
          __html: `<svg width="46" height="51" viewBox="0 0 46 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="22.8902" cy="25.5" rx="22.2222" ry="25.5" fill="#D1FF82"/>
            <mask id="mask0_170_8273" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="46" height="51">
              <ellipse cx="22.8902" cy="25.5" rx="22.2222" ry="25.5" fill="#C4C4C4"/>
            </mask>
            <g mask="url(#mask0_170_8273)">
              <ellipse cx="22.8889" cy="44.8797" rx="16.8889" ry="11.22" fill="#00884A"/>
            </g>
            <ellipse cx="22.8867" cy="21.6751" rx="8" ry="9.18" fill="#00884A"/>
          </svg>`,
        }}
      />
    </header>
  );
}; 