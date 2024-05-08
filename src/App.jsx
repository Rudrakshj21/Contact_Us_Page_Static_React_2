import "./App.css";
import Navigation from "./components/Navigation/Navigation.jsx";
import ContactHeader from "./components/ContactHeader/ContactHeader.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import { useState } from "react";
import FormSubmissionMessage from "./components/FormSubmissionMessage/FormSubmissionMessage.jsx";
function App() {
  const [name, setName] = useState("e");
  const [email, setEmail] = useState("a");
  const [text, setText] = useState("b");
  const [isSubmitted, setIsSubmitted] = useState(true);

  return (
    <div>
      <Navigation />
      <div className="main">
        <ContactHeader />
        {isSubmitted ? (
          <FormSubmissionMessage name={name} email={email} message={text} />
        ) : (
          <ContactForm
            name={name}
            email={email}
            text={text}
            isSubmitted={isSubmitted}
            setName={setName}
            setEmail={setEmail}
            setText={setText}
            setIsSubmitted={setIsSubmitted}
          />
        )}
      </div>
    </div>
  );
}

export default App;
