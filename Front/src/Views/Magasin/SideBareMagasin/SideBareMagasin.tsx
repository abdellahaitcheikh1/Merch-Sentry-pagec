import { Link } from "react-router-dom"
import"./sideBareMagasin.css"
import logo from "../../Admin/IMG/Blue_and_Black_Modern_Digital_Agency_Logo-removebg-preview.png"
import Minilogo from "../../Admin/IMG/Blue_and_Black_Modern_Digital_Agency_Logo-removebg-preview.png"

export default function SideBareMagasin(){
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
    <img className="mt-3" width="100px" src={logo}  />			
  </a>
  <ul className="side-menu top">
        <Link to="/magasine">
    <li className="active">
      <a href="#">
        <i className="bi bi-menu-button-wide-fill" />
      </a>
    </li>
      </Link>
    <Link to="/produits">
    <li>

      <a href="#">
        <i className="bi bi-box-seam" />
      </a>

    </li>
      </Link>
    <Link to="/commercial">
    <li>

      <a href="#">
      <i className="bi bi-headset"></i>
      </a>

    </li>
      </Link>
      <Link to="/magasin/client">
    <li>

      <a href="#">
      <i className="bi bi-people"></i>
      </a>

    </li>
      </Link>
      <Link to="/magasin/historique">
    <li>

      <a href="#">
      <i className="bi bi-clock"></i>
            </a>

    </li>
      </Link>
  </ul>
  <div className="menu-down">
    <ul className="side-menu top ">
    <Link to="/magasin/notification">
    <li>

      <a href="#">
      <i className="bi bi-bell"></i>
            </a>

    </li>
      </Link>
      <Link to="">
      <li>

        <a href="#">
          <i className="bi bi-gear" />
        </a>

      </li>
      </Link>
    </ul>
    <ul className="logout">
      <Link to="">
      <li>

        <a href="#" className="logout">
          <i className="bi bi-box-arrow-left" />
        </a>

      </li>
      </Link>
    </ul>
  </div>
</section>

</body>

    </>
}