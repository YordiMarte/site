import NextLink, { LinkProps as NextLinkProps } from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

type LinkProps = {
  children: ReactNode;
  className?: string;
  underline?: boolean;
  target?: string;
  rel?: string;
} & NextLinkProps;

export default function Link(props: LinkProps) {
  const isExternal = !props.href.toString().startsWith("/");
  const { underline, target, rel, ...rest } = props;
  return (
    <NextLink
      {...rest}
      className={clsx(
        "underline-offset-4",
        underline && "underline",
        props.className
      )}
      target={target || (isExternal ? "_blank" : undefined)}
      rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
    >
      {props.children}
    </NextLink>
  );
}