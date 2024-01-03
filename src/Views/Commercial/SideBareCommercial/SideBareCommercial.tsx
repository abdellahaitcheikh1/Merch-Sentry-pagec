import { Link, useLocation } from "react-router-dom"
import"./SideBare.css"
// import logo from "../../Admin/IMG/Blue_and_Black_Modern_Digital_Agency_Logo-removebg-preview.png"
import logocommercial from "../../Admin/IMG/computer-icons-user-profile-male-user-8d62411d7e891230b6d16cf2cad69184.png"
import { useEffect, useState } from "react";
export default function SideBareCommercial(){
  const location = useLocation();
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    const path = location.pathname;

    // Set the active item based on the current path
    setActiveItem(path);
  }, [location.pathname]);

    return<>
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />	{/* My CSS */}
  <title>Matjar</title>
</div>

<body>
<section id="sidebar">
  <a href="#" className="brand">
    <img className="mt-3" width="100px" src=""  />			
  </a>
  <img id="logoMagasin" src={logocommercial}  />	
  <br /><br />		
  <ul className="side-menu top">
    <li className={activeItem === "/commercial" ? "active" : "" }>
        <Link className="active" to="/commercial">
      <a href="#">
        <i className="bi bi-menu-button-wide-fill" />
      </a>
      </Link>
    </li >
    <li className={activeItem === "/commercial/produit" ? "active" : "" }>
      <Link to="/commercial/produit">

      <a href="#">
      <i className="bi bi-clock"></i>
            </a>

      </Link>
    </li>
  </ul>
  <div className="menu-down">
    <ul className="side-menu top ">
    <li className={activeItem === "/" ? "active" : "" }>
    <Link to="/magasin/notification">

      <a href="#">
      <i className="bi bi-bell"></i>
            </a>

      </Link>
    </li>
      <li className={activeItem === "/" ? "active" : "" }>
      <Link to="">

        <a href="#">
          <i className="bi bi-gear" />
        </a>

      </Link>
      </li>
    </ul>
    <ul className="logout">
      <li className={activeItem === "/" ? "active" : "" }> 
      <Link to="">

        <a href="#" className="logout">
          <i className="bi bi-box-arrow-left" />
        </a>

      </Link>
      </li>
    </ul>
  </div>
</section>

</body>

    </>
}