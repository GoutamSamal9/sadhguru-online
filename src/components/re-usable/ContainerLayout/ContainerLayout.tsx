import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ContainerLayout({ children }: Props) {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto  bg-[#e3ded5] px-4 py-4 my-12 rounded-md sm:px-6">
        {children}
      </div>
    </div>
  );
}
