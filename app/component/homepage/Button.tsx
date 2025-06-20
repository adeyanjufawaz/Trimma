import React, { Children } from "react";

function Button({children, bgColor, textColor}:{children:React.ReactNode,bgColor:string,textColor:string}) {
  return <button className={`w-40 py-2 ${bgColor} ${textColor}`}>
    {children}
  </button>;
}

export default Button;
