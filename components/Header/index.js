/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import Icon from "../../public/assets/images/transparentLogo.png";

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
    <>
      <div className={styles.header} id="header">
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
              // minWidth: 20,
              // maxWidth: 60,
              padding: 7,
              display: "flex",
              alignItems: "center",
            }}
          ></div>
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

        {open && (
          <div
            className={styles.collapse}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className={styles.divColumn} style={{ display: "flex" }}>
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
                  const findus = document.getElementById("Timeline");
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
                    location.href = "/#Timeline";
                  }
                }}
              >
                <div className={styles.nav_item}>Our Journey</div>
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
                  const blogs = document.getElementById("gallery");
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
                    location.href = "/#gallery";
                  }
                }}
              >
                <div className={styles.nav_item}>Gallery</div>
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
                <div className={styles.nav_item}>Reach us</div>
              </a>

              <a href="/" className={styles.erpLink}>
                <div className={styles.nav_item}>ERP Login</div>
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
            </div>
          </div>
        )}
        <div className={styles.button2}>
          <Link href={"https://www.google.com"}>ERP Login</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
