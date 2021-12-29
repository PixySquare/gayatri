// import { useRouter } from "next/router";
import { useState } from "react";
// import { db } from "../../firebase";
import styles from "./styles.module.css";
// import Loading from "../Loading";

function Form() {
  //   const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [referralCode, setReferralCode] = useState("code");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // await db.collection("clients").add({
    //   name: name,
    //   email: email,
    //   mobileNumber: mobile,
    //   referralCode: referralCode,
    //   subject: subject,
    //   message: message,
    // });
    // router.push("/");
  };

  return (
    <div className={styles.form}>
      {/* {loading ? <Loading /> : null} */}

      <form onSubmit={handleSubmit}>
        <h1
          className={styles.title}
          style={{ textAlign: "left", marginLeft: "10%" }}
        >
          Contact Us
        </h1>
        <div className={styles.flexDiv}>
          <div className={styles.formElement}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={styles.formElement} style={{ marginRight: 0 }}>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.formElement}>
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
