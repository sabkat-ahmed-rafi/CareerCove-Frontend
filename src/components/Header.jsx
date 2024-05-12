import React from "react";

const Header = ({h1, p}) => {
  return (
    <>
      <div className="space-y-2 py-6">
        <h1 className="text-center font-bold text-3xl">{h1}</h1>
        <p className="text-center text-sm w-[500px] mx-auto">{p}</p>
      </div>
    </>
  );
};

export default Header;
