import config from "@/config";

import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p>{makeCopyWriteString()}</p>
      </div>
    </footer>
  );
}

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

function makeCopyWriteString(): string {
  let duration: string;
  if (currentYear === config.since) duration = String(config.since);
  else duration = `${config.since}-${currentYear}`;

  return `Ⓒ ${duration} ${config.fullName}`;
}

export default Footer;
