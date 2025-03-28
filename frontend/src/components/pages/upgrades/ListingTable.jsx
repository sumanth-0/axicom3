import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ListingTable.module.css";

function ListingTable({ listings }) {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate('/upgrade-plan');
  };

  return (
    <div className={styles.listingTable}>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Time Remaining</th>
            <th>Status</th>
            <th>Applications</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listings.map((listing, index) => (
            <tr key={index}>
              <td>{listing.title}</td>
              <td>{listing.category}</td>
              <td>{listing.timeRemaining}</td>
              <td>
                <span className={`${styles.statusBadge} ${styles[listing.status.toLowerCase()]}`}>
                  {listing.status}
                </span>
              </td>
              <td>{listing.applications}</td>
              <td>
                <div className={styles.actions}>
                  <button 
                    className={styles.editButton}
                    onClick={handleApply}
                  >
                    {listing.action === "Apply" ? "Apply" : "Edit"}
                  </button>
                  <button className={styles.moreButton}>
                    <span className={styles.moreIcon}>⋮</span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListingTable; 