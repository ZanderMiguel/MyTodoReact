import React from "react";

const Footer = () => {
  const yearToday = new Date();
  return (
    <footer>
      <p>Copyright &copy; {yearToday.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
