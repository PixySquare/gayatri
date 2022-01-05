// import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
// import { db } from "../../firebase";
import styles from "./styles.module.css";
// import Loading from "../Loading";

function Form() {
  //   const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [cclass, setCclass] = useState("");
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

      <form action="https://formsubmit.co/heemankv@gmail.com" method="POST">
        <h1
          className={styles.title}
          style={{
            textAlign: "left",
            marginLeft: "10%",
            fontSize: 48,
            marginBottom: 30,
          }}
        >
          Contact Us
        </h1>

        <div className={styles.flexDiv}>
          <div className={styles.formElement}>
            <input type="text" placeholder="Your Name" name="Name" />
          </div>

          <div className={styles.formElement} style={{ marginRight: 0 }}>
            <input type="email" placeholder="Your Email" name="Email ID" />
          </div>
        </div>

        <div className={styles.flexDiv}>
          <div className={styles.formElement}>
            <input type="text" placeholder="Your Phone" name="Mobile Number" />
          </div>

          <div className={styles.formElement} style={{ marginRight: 0 }}>
            <input type="text" placeholder="Your Class" name="Class" />
          </div>
        </div>

        <div className={styles.formElement}>
          <textarea placeholder="Message" name="Message" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
