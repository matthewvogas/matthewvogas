"use client";

import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";

interface IconProps extends LucideProps {
  name: keyof typeof LucideIcons;
}

export const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = LucideIcons[name] as React.ElementType | undefined;
  if (!LucideIcon) return null;
  return <LucideIcon {...props} />;
}; 