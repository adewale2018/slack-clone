'use client';

import React from "react";
import { Toolbar } from "./toolbar";

interface WorkspaceIdLayoutProps {
  children: React.ReactNode;
}

const WorkspaceIdLayout = ({ children }: WorkspaceIdLayoutProps) => {
  return (
    <section className="h-full">
      <Toolbar />
      {children}
    </section>
  );
};

export default WorkspaceIdLayout;
