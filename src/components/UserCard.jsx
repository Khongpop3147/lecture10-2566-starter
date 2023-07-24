"use client";

import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useState } from "react";

export const UserCard = ({ name, imgUrl, address, email }) => {
  const [isDetailShown, setIsDetailShown] = useState(false);

  const userCardOnClick = () => {
    setIsDetailShown(!isDetailShown);
  };

  return (
    <div className="border-bottom">
      <div className="d-flex align-items-center p-3" onClick={userCardOnClick}>
        <img src={imgUrl} width="90px" className="rounded-circle me-4"></img>
        <span className="text-center display-6 me-auto">{name}</span>
        <IconChevronUp />
        <IconChevronDown />
      </div>
    </div>
  );
};
