import React from "react";
// import Image from "next/image";

function Logo() {
  return (
    <>  
    <div className=" rounded-2xl overflow-hidden dark:hidden ">

      <img
      src="./aglogow.jpg" 
      alt="logo" 
      height={"40"}
      width={"40"}
      />
      </div>
    
    <div className=" rounded-2xl mx-2 overflow-hidden hidden dark:block ">

      <img
      src="./aglogo.png" 
      alt="logo" 
      height={"40"}
      width={"40"}
      />
      </div>
    </>
  );
}

export default Logo;
