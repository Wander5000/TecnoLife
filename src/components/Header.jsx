import * as Scroll from 'react-scroll'

const {Link} = Scroll;

export function Header(){
    return(
        <header className="entire-page-header">
            <div className="page-title">
                <h1 className="enterprise-logo">TecnoLife</h1>
            </div>
            <div className="search-product">
                <input type="search" placeholder="Search for products" className="search-product-input"/>
            </div>
            <div className="page-links">
                <ul className="page-links-list">
                    <Link to="Inicio" spy={true} smooth={true} duration={500} offset={-50}>
                        <li className="page-link">Inicio</li>
                    </Link>
                    <Link to="Productos" spy={true} smooth={true} duration={500} offset={-50}>
                        <li className="page-link">Productos</li>
                    </Link>
                    <Link to="Nosotros" spy={true} smooth={true} duration={500} offset={-50}>
                        <li className="page-link">Nosotros</li>
                    </Link>
                    <Link to="CRUD" spy={true} smooth={true} duration={500} offset={-50}>
                        <li className="page-link">CRUD</li>
                    </Link>
                </ul>   
            </div>
        </header>
    )
  }
  