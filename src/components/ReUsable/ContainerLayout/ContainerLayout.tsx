import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ContainerLayout({ children }: Props) {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto h-auto p-2 my-6 rounded-md">
        {children}
      </div>
    </div>
  );
}
