import React, { useState } from "react";
import { registration } from "../../redux/actions/user";
import styles from "./Registration.module.css";
const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.registrationBlock}>
      <h2 className={styles.registrationTitle}>Registration</h2>
      <label className={styles.inputLabel}>Введіть ваш email:</label>
      <input
        className={styles.registrationInput}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Email"
      />
      <label className={styles.inputLabel}>Введіть ваш пароль:</label>
      <input
        className={styles.registrationInput}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Password"
      />
      <button
        className={styles.submitBtn}
        onClick={() => registration(email, password)}
      >
        Register
      </button>
    </div>
  );
};

export default Registration;
