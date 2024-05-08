import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
function ContactForm() {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.contact_form}`}>
        <div className={`${styles.btn_wrapper}`}>
          <Button>
            <MdMessage className={`${styles.icon}`} />
            VIA SUPPORT CHAT
          </Button>
          <Button>
            <IoMdCall className={`${styles.icon}`} />
            VIA CALL
          </Button>
        </div>
        <div className={`${styles.email_btn}`}>
          <Button>
            <MdMessage className={`${styles.icon}`} /> VIA EMAIL FORM
          </Button>
        </div>
      </div>
      <div className={`${styles.contact_image}`}></div>
    </section>
  );
}
export default ContactForm;
