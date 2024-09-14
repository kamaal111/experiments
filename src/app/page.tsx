"use client";

import Button from "@/components/button";
import Link from "@/components/link";

import styles from "./page.module.css";

const LINK = "https://apps.apple.com/bj/developer/kamaal-farah/id1502158009/";
const NAVIGATION_TIMEOUT = 2000;

function Home() {
  function handleNavigateAfterAWhileClick() {
    setTimeout(() => {
      window.location.href = LINK;
    }, NAVIGATION_TIMEOUT);
  }

  return (
    <div className={styles.page}>
      <h1>Links</h1>
      <Link link={LINK} aria-label="Apple store">
        <span>kamaal111</span>
      </Link>
      <Button onClick={handleNavigateAfterAWhileClick}>
        <span>Navigate after a while</span>
      </Button>
    </div>
  );
}

export default Home;
