import type { ReactPropsWithChildren } from "@/types/react-types";

import styles from "./main-content.module.css";

function MainContent({ children }: ReactPropsWithChildren) {
  return <main className={styles.main}>{children}</main>;
}

export default MainContent;
