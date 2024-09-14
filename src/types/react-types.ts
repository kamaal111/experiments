export type ReactProps<Props extends object = object> = Readonly<Props>;

export type ReactPropsWithChildren<Props extends object = object> = ReactProps<
  Props & { children: React.ReactNode }
>;
