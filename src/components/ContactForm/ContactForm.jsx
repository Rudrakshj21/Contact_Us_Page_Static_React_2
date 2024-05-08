import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
function ContactForm({
  name,
  email,
  text,
  setName,
  setEmail,
  setText,
  isSubmitted,
  setIsSubmitted,
}) {
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
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={`${styles.input_wrapper}`}>
            <label className={`${styles.label}`}>E-mail</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={`${styles.input_wrapper}`}>
            <label className={`${styles.label}`}>Text</label>
            <textarea
              rows={10}
              cols={46}
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
          <Button isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted}>
            Submit
          </Button>
        </form>
      </div>
      <div className={`${styles.contact_image}`}>
        <img src="/images/service.png" alt="service_image" />
      </div>
    </section>
  );
}
export default ContactForm;
