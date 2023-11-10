import React from "react";

type SidebarItemProps = {
  name: string;
  isActive: boolean;
  onClick(): void;
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  name,
  isActive,
  onClick,
}) => {
  const activeClass = isActive ? "active" : undefined;
  return (
    <button onClick={onClick} className={`sidebar-item ${activeClass}`}>
      {name}
    </button>
  );
};

export default SidebarItem;
