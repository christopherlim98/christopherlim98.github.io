import { ReactNode } from "react";
import React from "react";

export interface LinkProps {
  href: string;
  includeAt?: boolean;
  children: ReactNode;
}

export default function Link(props: LinkProps) {
  return (
    <div className="inline-block hover:animate-bounce-text">
      <>
        <h2 className="inline -mt-10">{props.includeAt ? "@ " : ""}</h2>
        <a href={props.href} target="_blank">
          {props.children}
        </a>
      </>
    </div>
  );
}
