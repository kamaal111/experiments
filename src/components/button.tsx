"use client";

import type { ComponentProps } from "react";

import type { ReactPropsWithChildren } from "@/types/react-types";

import styles from "./button.module.css";

type Props = ReactPropsWithChildren<
  Required<Pick<ComponentProps<"button">, "onClick">>
>;

function Button({ children, onClick }: Props) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
