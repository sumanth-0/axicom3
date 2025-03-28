import React from "react";
import styles from "./UpgradesPage.module.css";
import CategoryCard from "./CategoryCard";
import ListingSection from "./ListingSection";

function UpgradesPage() {
  const categories = [
    {
      icon: "💰",
      title: "Funding",
      description: "Find investors and funding opportunities for your startup"
    },
    {
      icon: "👥",
      title: "Mentorship",
      description: "Connect with experienced mentors in your industry"
    },
    {
      icon: "🏢",
      title: "Workspace",
      description: "Discover co-working spaces and office locations"
    },
    {
      icon: "💼",
      title: "Jobs",
      description: "Post and find job opportunities for your team"
    }
  ];

  const fundingListings = [
    {
      title: "Seed Funding Round",
      category: "Venture Capital",
      timeRemaining: "5 days",
      status: "Active",
      applications: 12,
      action: "Apply"
    },
    {
      title: "Angel Investment",
      category: "Angel Investors",
      timeRemaining: "2 weeks",
      status: "Pending",
      applications: 8,
      action: "Apply"
    }
  ];

  const mentorshipListings = [
    {
      title: "Tech Industry Mentor",
      category: "Technology",
      timeRemaining: "1 week",
      status: "Active",
      applications: 5,
      action: "Apply"
    }
  ];

  const workspaceListings = [
    {
      title: "Co-working Space",
      category: "Office",
      timeRemaining: "3 days",
      status: "Active",
      applications: 3,
      action: "Apply"
    }
  ];

  const jobsListings = [
    {
      title: "Senior Developer",
      category: "Engineering",
      timeRemaining: "1 week",
      status: "Active",
      applications: 15,
      action: "Edit"
    }
  ];

  return (
    <div className={styles.upgradesPage}>
      <h1 className={styles.pageTitle}>Upgrades</h1>
      
      <div className={styles.categoriesGrid}>
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            icon={category.icon}
            title={category.title}
            description={category.description}
          />
        ))}
      </div>

      <ListingSection
        title="Funding Opportunities"
        status="2 Active"
        statusLabel="Available"
        listings={fundingListings}
      />

      <ListingSection
        title="Mentorship Programs"
        status="1 Active"
        statusLabel="Available"
        listings={mentorshipListings}
      />

      <ListingSection
        title="Workspace Options"
        status="1 Active"
        statusLabel="Available"
        listings={workspaceListings}
      />

      <ListingSection
        title="Job Listings"
        status="1 Active"
        statusLabel="Available"
        listings={jobsListings}
      />
    </div>
  );
}

export default UpgradesPage; 