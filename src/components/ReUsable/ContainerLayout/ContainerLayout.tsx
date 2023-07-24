import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string
}

export default function ContainerLayout({ children, className }: Props) {
  return (
    <div className="min-h-screen">
      <div className={`container mx-auto h-auto p-2 my-6 rounded-md ${className}`}>
        {children}
      </div>
    </div>
  );
}
