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

        <form>
          <div className={`${styles.input_wrapper}`}>
            <label className={`${styles.label}`}>Name</label>
            <input type="text" />
          </div>
          <div className={`${styles.input_wrapper}`}>
            <label className={`${styles.label}`}>E-mail</label>
            <input type="text" />
          </div>
          <div className={`${styles.input_wrapper}`}>
            <label className={`${styles.label}`}>Text</label>
            <textarea rows={10} cols={46}></textarea> 
          </div>
          <Button>Submit</Button>
        </form>
      </div>
      <div className={`${styles.contact_image}`}>
        <img src="/images/service.png" alt="service_image" />
      </div>
    </section>
  );
}
export default ContactForm;
