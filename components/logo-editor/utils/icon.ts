import { IconType } from "../types";

export function validateIcon(Icon: IconType | null): Icon is IconType {
  return Icon !== null && typeof Icon === 'function';
}

export function createIconElement(
  Icon: IconType,
  size: number,
  color: string,
  opacity: number,
  rotation: number
): JSX.Element {
  return (
    <div
      style={{
        transform: `rotate(${rotation}deg)`,
        opacity,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Icon size={size} color={color} strokeWidth={2} />
    </div>
  );
}