import React from "react";

export default function Footer({ darkMode, footer }) {
  return (
    <div className={darkMode ? "dark text-bg-dark" : "light text-bg-light"}>
      <div className="container-fluid border-top py-2">
        <p className="text-center fs-5 my-2">
          © {new Date().getFullYear()}{" "}
          <a className="link-opacity-100-hover text" href="/">
            {footer.name}
          </a>
          . All Rights Reserved
        </p>
      </div>
    </div>
  );
}
