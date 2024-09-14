import type { ReactPropsWithChildren } from "@/types/react-types";

type Props = ReactPropsWithChildren<{
  link: string;
  "aria-label": string;
}>;

function Link({ link, ["aria-label"]: ariaLabel, children }: Props) {
  return (
    <a href={link} aria-label={ariaLabel}>
      {children}
    </a>
  );
}

export default Link;
