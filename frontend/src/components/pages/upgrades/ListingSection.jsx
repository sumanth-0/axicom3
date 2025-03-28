import React from "react";
import styles from "./ListingSection.module.css";
import SmartAISuggest from "./SmartAISuggest";
import ListingTable from "./ListingTable";

function ListingSection({ title, status, statusLabel, listings }) {
  return (
    <section className={styles.listingSection}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <div className={styles.statusContainer}>
          <span className={styles.statusLabel}>{statusLabel}</span>
          <div className={styles.statusValue}>{status}</div>
        </div>
      </header>

      <SmartAISuggest />

      <ListingTable listings={listings} />
    </section>
  );
}

export default ListingSection; 