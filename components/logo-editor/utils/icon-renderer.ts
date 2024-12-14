"use client";

import { IconType } from "../types";
import { createElement } from "react";

export function renderIcon(
  Icon: IconType | null,
  props: {
    size: number;
    color: string;
    opacity: number;
    rotation: number;
    className?: string;
  }
): JSX.Element | null {
  if (!Icon) return null;

  const { size, color, opacity, rotation, className } = props;

  return createElement(
    "div",
    {
      style: {
        transform: `rotate(${rotation}deg)`,
        opacity,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      className,
    },
    createElement(Icon, {
      size,
      color,
      strokeWidth: 2,
    })
  );
}