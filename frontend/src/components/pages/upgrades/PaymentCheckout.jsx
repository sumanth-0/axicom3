"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PaymentCheckout.module.css";

function PaymentCheckout() {
  const navigate = useNavigate();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsProcessing(true);
    try {
      // Simulated payment processing
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Payment successful!");
      navigate('/project-dashboard');
    } catch (error) {
      alert("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  }

  return (
    <main className={styles.checkout}>
      <section className={styles.checkoutContainer}>
        <div className={styles.checkoutContent}>
          <PaymentForm
            selectedPaymentMethod={selectedPaymentMethod}
            setSelectedPaymentMethod={setSelectedPaymentMethod}
            cardName={cardName}
            setCardName={setCardName}
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            expiryDate={expiryDate}
            setExpiryDate={setExpiryDate}
            cvc={cvc}
            setCvc={setCvc}
            handleSubmit={handleSubmit}
          />

          <OrderSummary
            isProcessing={isProcessing}
            handleSubmit={handleSubmit}
          />
        </div>
      </section>
    </main>
  );
}

function PaymentForm({
  selectedPaymentMethod,
  setSelectedPaymentMethod,
  cardName,
  setCardName,
  cardNumber,
  setCardNumber,
  expiryDate,
  setExpiryDate,
  cvc,
  setCvc,
  handleSubmit,
}) {
  return (
    <div className={styles.paymentForm}>
      <h2 className={styles.checkoutTitle}>Checkout</h2>

      <div className={styles.paymentMethods}>
        <button
          className={styles.paymentMethodButton}
          onClick={() => setSelectedPaymentMethod("card")}
          style={{
            border:
              selectedPaymentMethod === "card"
                ? "2px solid #00884A"
                : "1px solid #E4E5E8",
          }}
          type="button"
        >
          <span>Credit Card</span>
        </button>

        <button
          className={styles.paymentMethodButton}
          onClick={() => setSelectedPaymentMethod("paypal")}
          style={{
            border:
              selectedPaymentMethod === "paypal"
                ? "2px solid #00884A"
                : "1px solid #E4E5E8",
          }}
          type="button"
        >
          <span>PayPal</span>
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="cardName" className={styles.formLabel}>
            Name on Card
          </label>
          <input
            id="cardName"
            type="text"
            placeholder="Name on card"
            className={styles.formInput}
            value={cardName}
            required
            onChange={(e) => setCardName(e.target.value)}
          />
        </div>

        <div className={styles.cardDetailsGroup}>
          <label className={styles.formLabel}>Card Details</label>
          <div className={styles.cardDetailsRow}>
            <input
              type="text"
              placeholder="Card number"
              className={styles.cardNumberInput}
              value={cardNumber}
              required
              onChange={(e) => setCardNumber(e.target.value)}
            />

            <input
              type="text"
              placeholder="MM/YY"
              className={styles.expiryInput}
              value={expiryDate}
              required
              onChange={(e) => setExpiryDate(e.target.value)}
            />

            <input
              type="text"
              placeholder="CVC"
              className={styles.cvcInput}
              value={cvc}
              required
              onChange={(e) => setCvc(e.target.value)}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

function OrderSummary({ isProcessing, handleSubmit }) {
  return (
    <aside className={styles.orderSummary}>
      <div className={styles.summaryCard}>
        <h3 className={styles.summaryTitle}>Summary</h3>

        <div className={styles.summaryRow}>
          <span>Pricing Plans: Premium</span>
          <span>$59.00</span>
        </div>

        <div className={styles.totalRow}>
          <span className={styles.totalLabel}>Total:</span>
          <span className={styles.totalAmount}>$59 USD</span>
        </div>

        <button
          type="submit"
          className={styles.payButton}
          disabled={isProcessing}
          onClick={handleSubmit}
          style={{
            opacity: isProcessing ? "0.7" : "1",
          }}
        >
          {isProcessing ? "Processing..." : "Pay Now"}
        </button>

        <p className={styles.packageNote}>
          This package will expire after one month.
        </p>
      </div>
    </aside>
  );
}

export default PaymentCheckout; 