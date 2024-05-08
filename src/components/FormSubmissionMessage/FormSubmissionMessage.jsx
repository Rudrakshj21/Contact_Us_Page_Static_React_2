import styles from "./FormSubmission.module.css";

function FormSubmissionMessage({ name, email, message }) {
  return (
    <marquee scrollamount="20" loop="0" direction  = "right">

    <div className={`${styles.container}`}>
      <div>Form Submitted Successfully ✅</div>
      <div className={`${styles.name}`}>Name : {name}</div>
      <div className={`${styles.email}`}>Email : {email}</div>
      <div className={`${styles.message}`}>Message : {message}</div>
    </div>
    </marquee>
  );
}
export default FormSubmissionMessage;
