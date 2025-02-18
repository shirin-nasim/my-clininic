import React from "react";
import DashboardHeader from "../DashboardHeader";

interface MainLayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
}

const MainLayout = ({ children, showHeader = true }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {showHeader && <DashboardHeader />}
      {children}
    </div>
  );
};

export default MainLayout;
