import styles from "./Button.module.css";

function Button({ children, setIsSubmitted }) {
  if (!setIsSubmitted) {
    // console.log("normal btn");
    return <button className={`${styles.btn}`}>{children}</button>;
  }
  return (
    <button
      className={`${styles.btn} submit`}
      onClick={(event) => {
        event.preventDefault();
        // console.log("clicked");
        setIsSubmitted((sub) => !sub);
      }}
    >
      {console.log("submit button")}
      {children}
    </button>
  );
}
export default Button;
