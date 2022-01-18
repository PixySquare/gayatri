// import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
// import { db } from "../../firebase";
import styles from "./styles.module.css";
// import Loading from "../Loading";
import { Fade } from "react-awesome-reveal";

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
    <div className={styles.form + " lol_curve"} id="contact">
      {/* {loading ? <Loading /> : null} */}

      <form
        action="https://formsubmit.co/heemankv@gmail.com"
        method="POST"
        className={styles.main}
      >
        <h1
          className=" headings"
          style={{
            textAlign: "center",
            marginLeft: "",
            marginBottom: 30,
            fontFamily: "chalkie2",
            color: "#2e92bc",
          }}
        >
          Contact Us
        </h1>
        <Fade>
          <div className={styles.flexDiv}>
            <div
              className={styles.formElement}
              styles={{ fontFamily: "poppins" }}
            >
              <input
                type="text"
                styles={{ fontFamily: "poppins" }}
                placeholder="Your Name"
                name="Name"
              />
            </div>

            <div className={styles.formElement} style={{ marginRight: 0 }}>
              <input type="email" placeholder="Your Email" name="Email ID" />
            </div>
          </div>

          <div className={styles.flexDiv}>
            <div className={styles.formElement}>
              <input
                type="text"
                placeholder="Your Phone"
                name="Mobile Number"
              />
            </div>

            <div className={styles.formElement} style={{ marginRight: 0 }}>
              <input type="text" placeholder="Your Class" name="Class" />
            </div>
          </div>

          <div className={styles.formElement}>
            <textarea placeholder="Message" name="Message" />
          </div>

          <button styles={{ fontFamily: "poppins" }} type="submit">
            Submit
          </button>
        </Fade>
      </form>
      <br className="onMobile" />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Form;
