import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebare.css";
import Logo from "../IMG/Logo.png"
export default function Sidebare() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    const path = location.pathname;

    // Set the active item based on the current path
    setActiveItem(path);
  }, [location.pathname]);

  return (
    <>
    {/* sidebare admin  */}
    
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
        {/* My CSS */}
        <title>Matjar</title>
      </div>

      <body>
        <section className="sidebar">
          <a href="#" className="brand">
            <img className="mt-3" src={Logo} />
          </a>
          <br />
          <ul className="side-menu top">
            <li className={activeItem === "/" || activeItem==="/produit" ? "active" : "" }>
              <Link className="active" to="/">
                <a href="#">
                  <i className="bi bi-menu-button-wide-fill" />
                </a>
              </Link>
            </li>
            <li className={activeItem === "/categories" ? "active"  : "" || activeItem === "/ajouter-produit" ? "active"  : ""}>
              <Link to="/categories">
                <a href="#">
                  <i className="bi bi-box-seam" />
                </a>
              </Link>
            </li>
            <li className={activeItem === "/magasin" ? "active" : ""|| activeItem === "/magasin/create" ? "active"  : "" || activeItem === "/magasin/edit" ? "active"  : ""}>
              <Link to="/magasin">
                <a href="#">
                  <i className="bi bi-shop" />
                </a>
              </Link>
            </li>
            <li className={activeItem === "/historique" ? "active" : ""}>
              <Link to="/historique">
                <a href="#">
                  <i className="bi bi-clock"></i>
                </a>
              </Link>
            </li>
          </ul><br />
          <div className="menu-down mt-5">
          <div className="hr">
            <hr />
          </div>
            <ul className="side-menu top ">
            <li className={activeItem === "/notifacation" ? "active" : "" }>
              <Link to="">

                <a href="#">
                <i className="bi bi-bell"><span className="countNotif">1</span></i>
                      </a>

                </Link>
              </li>
              <li className={activeItem === "/settings" ? "active" : ""}>
                <Link to="">
                  <a href="#">
                    <i className="bi bi-gear" />
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="logout">
              <li className={activeItem === "/logout" ? "active" : ""}>
                <Link to="/logout" className="logout">
                  <a href="#">
                    <i className="bi bi-box-arrow-left" />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </body>
    </>
  );
}
