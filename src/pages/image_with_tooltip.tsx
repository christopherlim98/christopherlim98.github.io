import { Tooltip } from "@material-tailwind/react";
import { Image } from "react-bootstrap";
import React from "react";

export interface TooltipImageProps {
  src: string;
  tooltipText: string;
}

export default function ImageWithTooltip(props: TooltipImageProps) {
  return (
    <Tooltip
      className="rounded bg-gray-700 text-gray-100 px-4"
      content={props.tooltipText}
      placement="bottom"
    >
      <Image src={props.src} alt={props.tooltipText} width={40} height={40} />
    </Tooltip>
  );
}
