import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation.jsx";
import Footer from "../Footer/Footer.jsx";
import styles from "../../style/main.module.css"

const BaseLayout = () => {
  return (
    <>
      <header>
        <Navigation/>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default BaseLayout