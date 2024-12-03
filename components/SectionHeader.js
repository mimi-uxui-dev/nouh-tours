import React from "react";

function SectionHeader({ title }) {
  return (
    <div className="flex w-full justify-center self-center items-center mb-10 sm:mb-20 ">
      <div className="max-w-screen-2xl sectionHeader flex w-full">{title}</div>
    </div>
  );
}

export default SectionHeader;
