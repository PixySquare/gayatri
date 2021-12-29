/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import Icon from "../../public/assets/images/logo.png";
import Button from  "../../common/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Header() {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    if (process.browser) {
      if (window.innerWidth < 1055) {
        setOpen(false);
      }
    }
  }, []);

  useEffect(() => {
    const url = window.location.href.split("/");
    const target = url[url.length - 1].toLowerCase();
    const element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  if (process.browser) {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1055) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    });
  }

  return (
    <div className={styles.header}>
      <div
        className={styles.logoDiv}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "left",
          // flex: 0.3,
        }}
      >
        <div
          style={{
            minWidth: 20,
            maxWidth: 50,
            padding: 7,
            display: "flex",
            alignItems: "center",
          }}
        >
        </div>
        <Link
          href="/"
          passHref
          onClick={(e) => {
            e.preventDefault();
            if (process.browser) {
              if (window.innerWidth < 1055) {
                setOpen(false);
              }
            }
          }}
        >
          <Image className={styles.image} src={Icon} alt={"title"} />
        </Link>
      </div>

      <div className={styles.menu} onClick={() => setOpen(!open)}>
        {open ? (
          <>
            <div className={styles.change1}></div>
            <div className={styles.change2}></div>
            <div className={styles.change3}></div>
          </>
        ) : (
          <>
            <div className={styles.bar1}></div>
            <div className={styles.bar2}></div>
            <div className={styles.bar3}></div>
          </>
        )}
      </div>
      <div style={{ display: "flex", width: "100%" }}>
        {open && (
          <div
            className={styles.collapse}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div style={{ display: "flex" }}>
              <a
                href="/"
                onClick={(e) => {
                  const about = document.getElementById("aboutus");
                  e.preventDefault();
                  if (process.browser) {
                    if (window.innerWidth < 1055) {
                      setOpen(false);
                    }
                  }
                  about &&
                    about.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });

                  if (
                    window.location.href != "http://localhost:3000/" &&
                    window.location.href != "https://pizzacassino.vercel.app/"
                  ) {
                    location.href = "/#aboutus";
                  }
                }}
              >
                <div className={styles.nav_item}>About Us</div>
              </a>

              <a
                href="/"
                onClick={(e) => {
                  const findus = document.getElementById("gallery");
                  e.preventDefault();
                  if (process.browser) {
                    if (window.innerWidth < 1055) {
                      setOpen(false);
                    }
                  }
                  findus &&
                    findus.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  // window.history.pushState("findus", "findus", "/findus");
                  if (
                    window.location.href != "http://localhost:3000/" &&
                    window.location.href != "https://pizzacassino.vercel.app/"
                  ) {
                    location.href = "/#history";
                  }
                }}
              >
                <div className={styles.nav_item}>Vision and Mission</div>
              </a>

              <a
                href="/"
                onClick={(e) => {
                  const blogs = document.getElementById("academics");
                  e.preventDefault();
                  if (process.browser) {
                    if (window.innerWidth < 1055) {
                      setOpen(false);
                    }
                  }
                  blogs &&
                    blogs.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  // window.history.pushState("blogs", "blogs", "/blogs");
                  if (
                    window.location.href != "http://localhost:3000/" &&
                    window.location.href != "https://pizzacassino.vercel.app/"
                  ) {
                    location.href = "/#academics";
                  }
                }}
              >
                <div className={styles.nav_item}>Academics</div>
              </a>

              
              <a
                href="/"
                onClick={(e) => {
                  const team = document.getElementById("contact");
                  e.preventDefault();
                  if (process.browser) {
                    if (window.innerWidth < 1055) {
                      setOpen(false);
                    }
                  }
                  team &&
                    team.scrollIntoView({ behavior: "smooth", block: "start" });
                  // window.history.pushState("team", "team", "/team");
                  if (
                    window.location.href != "http://localhost:3000/" &&
                    window.location.href != "https://pizzacassino.vercel.app/"
                  ) {
                    location.href = "/#contact";
                  }
                }}
              >
                <div className={styles.nav_item}>Contact Us</div>
              </a>
            </div>

            <div className={styles.socials}>
              {/* <Link href={"https://www.instagram.com"}>
                <a target="_blank" className={styles.nav_item}>
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </Link>
              <Link href={"https://www.facebook.com"}>
                <a target="_blank">
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
              </Link>
              <Link href={"https://www.whatsapp.com"}>
                <a target="_blank" className={styles.nav_item}>
                  <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                </a>
              </Link> */}

              <Button text="ERP Login"  href={"https://www.google.com"}></Button>


            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
