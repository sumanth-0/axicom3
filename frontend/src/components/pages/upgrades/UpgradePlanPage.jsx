"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UpgradePlanPage.module.css";

// Logo SVG Component
const LogoIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_382_5752)">
      <path
        d="M23.5473 10.5735L16.0007 3.02686L8.45398 10.5735C4.29398 14.7335 4.29398 21.4935 8.45398 25.6535C10.534 27.7335 13.2673 28.7735 16.0007 28.7735C18.734 28.7735 21.4673 27.7335 23.5473 25.6535C27.7073 21.4935 27.7073 14.7335 23.5473 10.5735ZM16.0007 26.1202C13.8673 26.1202 11.854 25.2935 10.3473 23.7735C8.82732 22.2535 8.00065 20.2535 8.00065 18.1202C8.00065 15.9869 8.82732 13.9735 10.3473 12.4669L16.0007 6.80019V26.1202Z"
        fill="#00884A"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_382_5752">
        <rect width="32" height="32" fill="white"></rect>
      </clipPath>
    </defs>
  </svg>
);

// Avatar SVG Component
const AvatarIcon = () => (
  <svg
    width="44"
    height="51"
    viewBox="0 0 46 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="22.8882"
      cy="25.5"
      rx="22.2222"
      ry="25.5"
      fill="#D1FF82"
    ></ellipse>
    <mask
      id="mask0_170_7336"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="46"
      height="51"
    >
      <ellipse
        cx="22.8882"
        cy="25.5"
        rx="22.2222"
        ry="25.5"
        fill="#C4C4C4"
      ></ellipse>
    </mask>
    <g mask="url(#mask0_170_7336)">
      <ellipse
        cx="22.8869"
        cy="44.8797"
        rx="16.8889"
        ry="11.22"
        fill="#00884A"
      ></ellipse>
    </g>
    <ellipse
      cx="22.8906"
      cy="21.6751"
      rx="8"
      ry="9.18"
      fill="#00884A"
    ></ellipse>
  </svg>
);

// Check Icon Component
const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.5625 6.5625L4.6875 13.4375L1.25 10.0002"
      stroke="#00884A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M18.7498 6.5625L11.8748 13.4375L10.0488 11.6116"
      stroke="#00884A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

// X Circle Icon Component
const XCircleIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
      stroke="#E05151"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    ></path>
    <path
      d="M12.5 7.5L7.5 12.5"
      stroke="#E05151"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12.5 12.5L7.5 7.5"
      stroke="#E05151"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

// Arrow Right Icon Component
const ArrowRightIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.5 12H19.5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12.5 5L19.5 12L12.5 19"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

// Edit Icon Component
const EditIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_108_1207)">
      <path
        d="M9.16601 3.3335H3.33268C2.89065 3.3335 2.46673 3.50909 2.15417 3.82165C1.84161 4.13421 1.66602 4.55814 1.66602 5.00016V16.6668C1.66602 17.1089 1.84161 17.5328 2.15417 17.8453C2.46673 18.1579 2.89065 18.3335 3.33268 18.3335H14.9993C15.4414 18.3335 15.8653 18.1579 16.1779 17.8453C16.4904 17.5328 16.666 17.1089 16.666 16.6668V10.8335"
        stroke="#767F8C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M15.416 2.0832C15.7475 1.75168 16.1972 1.56543 16.666 1.56543C17.1349 1.56543 17.5845 1.75168 17.916 2.0832C18.2475 2.41472 18.4338 2.86436 18.4338 3.3332C18.4338 3.80204 18.2475 4.25168 17.916 4.5832L9.99935 12.4999L6.66602 13.3332L7.49935 9.99986L15.416 2.0832Z"
        stroke="#767F8C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_108_1207">
        <rect width="20" height="20" fill="white"></rect>
      </clipPath>
    </defs>
  </svg>
);

// Mastercard Icon Component
const MastercardIcon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      opacity="0.8"
      cx="34.296"
      cy="19.1026"
      rx="14.0909"
      ry="14.1026"
      fill="#FFAD08"
    ></ellipse>
    <ellipse
      opacity="0.8"
      cx="16.2589"
      cy="19.1026"
      rx="14.0909"
      ry="14.1026"
      fill="#EE1111"
    ></ellipse>
  </svg>
);

// Current Plan Card Component
const CurrentPlanCard = ({ onPayNow }) => (
  <article className={styles.currentPlanCard}>
    <h2 className={styles.cardTitle}>Current Plan</h2>
    <div className={styles.planInfoContainer}>
      <h3 className={styles.planName}>Premium</h3>
      <p className={styles.planDescription}>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere.
      </p>
    </div>
    <div className={styles.buttonGroup}>
      <button className={styles.primaryButton}>Change Plans</button>
      <button className={styles.secondaryButton}>Cancel Plan</button>
    </div>
  </article>
);

// Benefit Item Component
const BenefitItem = ({ text }) => (
  <div className={styles.benefitItem}>
    <CheckIcon />
    <p className={styles.benefitText}>{text}</p>
  </div>
);

// Remaining Item Component
const RemainingItem = ({ text }) => (
  <div className={styles.remainingItem}>
    <XCircleIcon />
    <p className={styles.remainingText}>{text}</p>
  </div>
);

// Plan Benefits Card Component
const PlanBenefitsCard = () => (
  <article className={styles.benefitsCard}>
    <div className={styles.benefitsHeader}>
      <h2 className={styles.benefitsTitle}>Plan Benefits</h2>
      <p className={styles.benefitsSubtitle}>
        Proin porta enim sit amet placerat finibus. Sed eget laoreet lorem.
      </p>
    </div>
    <div className={styles.benefitsGrid}>
      <BenefitItem text="6 Active Jobs" />
      <BenefitItem text="Urgents & Featured Jobs" />
      <BenefitItem text="Highlights Job with Colors" />
      <BenefitItem text="Access & Saved 20 Candidates" />
      <BenefitItem text="60 Days Resume Visibility" />
      <BenefitItem text="24/7 Critical Support" />
    </div>
    <div className={styles.divider} />
    <div className={styles.remainingSection}>
      <h3 className={styles.remainingTitle}>Remaining</h3>
      <div className={styles.remainingGrid}>
        <RemainingItem text="9 Resume Access" />
        <RemainingItem text="21 Days resume visibility" />
        <RemainingItem text="4 Active Jobs" />
      </div>
    </div>
  </article>
);

// Invoice Card Component
const InvoiceCard = ({ onPayNow }) => (
  <article className={styles.invoiceCard}>
    <h2 className={styles.invoiceTitle}>Next Inovices</h2>
    <div className={styles.invoiceDetails}>
      <p className={styles.invoiceAmount}>$59.00 USD</p>
      <div className={styles.invoiceDateContainer}>
        <div className={styles.invoiceDateGroup}>
          <h3 className={styles.invoiceDate}>Nov 28, 2021</h3>
          <p className={styles.packageInfo}>
            <span className={styles.packageLabel}>Package started:</span>
            <span className={styles.packageValue}>Jan 28, 2021</span>
          </p>
        </div>
        <p className={styles.invoiceNote}>
          You have to pay this amount of money every month.
        </p>
      </div>
    </div>
    <button className={styles.payNowButton} onClick={onPayNow}>
      <span>Pay Now</span>
      <ArrowRightIcon />
    </button>
  </article>
);

// Payment Card Component
const PaymentCard = () => (
  <article className={styles.paymentMethodCard}>
    <div className={styles.paymentCardHeader}>
      <h2 className={styles.paymentCardTitle}>Payment Card</h2>
      <button className={styles.editCardButton}>
        <EditIcon />
        <span>Edit Card</span>
      </button>
    </div>
    <div className={styles.cardDetailsContainer}>
      <div className={styles.cardInfoRow}>
        <MastercardIcon />
        <div className={styles.cardInfoGroup}>
          <p className={styles.cardInfoLabel}>Name on card</p>
          <p className={styles.cardInfoValue}>Esther Howard</p>
        </div>
        <div className={styles.cardInfoGroup}>
          <p className={styles.cardInfoLabel}>Expire date</p>
          <p className={styles.cardInfoValue}>12/29</p>
        </div>
      </div>
      <div className={styles.divider} />
      <p className={styles.cardNumber}>4321 **** **** ****</p>
    </div>
  </article>
);

// Main UpgradePlanPage Component
function UpgradePlanPage() {
  const navigate = useNavigate();

  const handlePayNow = () => {
    navigate('/payment-checkout');
  };

  return (
    <main className={styles.container}>
      <section className={styles.mainContent}>
        <div className={styles.cardRow}>
          <CurrentPlanCard onPayNow={handlePayNow} />
          <PlanBenefitsCard />
        </div>
        <div className={styles.cardRow}>
          <InvoiceCard onPayNow={handlePayNow} />
          <PaymentCard />
        </div>
      </section>
    </main>
  );
}

export default UpgradePlanPage; 