// app/login/page.jsx
import styles from "./page.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <h1 className={styles.title}>로그인</h1>
        <p className={styles.subtitle}>계정에 로그인하여 쇼핑을 시작하세요</p>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              이메일
            </label>
            <input
              type="email"
              id="email"
              className={styles.input}
              placeholder="이메일을 입력하세요"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              className={styles.input}
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}
