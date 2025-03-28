"use client";
import React from "react";
import styles from "../styles/InputDesign.module.css";

export const SidebarNav = () => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <div
          dangerouslySetInnerHTML={{
            __html: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>`,
          }}
        />
      </div>
      <h2 className={styles.sidebarLabel}>EMPLOYERS DASHBOARD</h2>
      <div className={styles.menuContainer}>
        <NavItem icon="Dashboard" text="Dashboard" />
        <NavItem icon="Profile" text="Profile" />
        <NavItem icon="Jobs" text="Jobs" />
        <NavItem icon="Candidates" text="Candidates" />
        <NavItem icon="Reports" text="Reports" />
        <NavItem icon="Settings" text="Settings" />
        <NavItem icon="Help" text="Help" />
      </div>
      <button className={styles.logoutButton}>
        <div
          dangerouslySetInnerHTML={{
            __html: getIconSvg("Logout"),
          }}
        />
        <span className={styles.menuText}>Log-out</span>
      </button>
    </nav>
  );
};

const NavItem = ({ icon, text, isActive }) => {
  return (
    <button
      className={`${styles.menuItem} ${isActive ? styles.activeMenuItem : ""}`}
    >
      <div dangerouslySetInnerHTML={{ __html: getIconSvg(icon) }} />
      <span className={styles.menuText}>{text}</span>
    </button>
  );
};

const getIconSvg = (iconName) => {
  const icons = {
    Dashboard: `<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/></svg>`,
    Profile: `<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a8.5 8.5 0 0 1 13 0"/></svg>`,
    Jobs: `<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
    Candidates: `<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="4"/><path d="M16 21v-2a4 4 0 0 0-8 0v2"/></svg>`,
    Reports: `<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3zM8 10l2 2 4-4"/></svg>`,
    Settings: `<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a2 2 0 0 0 .4-1 2 2 0 0 0-.4-1l1.5-1.5a2 2 0 0 0-2.8-2.8L17 8.6a2 2 0 0 0-1-.4 2 2 0 0 0-1 .4l-1.5-1.5a2 2 0 0 0-2.8 2.8L8.6 9a2 2 0 0 0-.4 1 2 2 0 0 0 .4 1l-1.5 1.5a2 2 0 0 0 2.8 2.8L9 17.4a2 2 0 0 0 1 .4 2 2 0 0 0 1-.4l1.5 1.5a2 2 0 0 0 2.8-2.8L15.4 15a2 2 0 0 0 .4-1 2 2 0 0 0-.4-1"/></svg>`,
    Help: `<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9 9a3 3 0 1 1 6 0c0 2-3 3-3 6m0 3h.01"/></svg>`,
    Logout: `<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 15l5-5-5-5M19 12H9"/></svg>`
  };
  return icons[iconName] || "";
};
