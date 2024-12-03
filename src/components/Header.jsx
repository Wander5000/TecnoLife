export function Header(){
    return(
        <header className="entire-page-header">
            <div className="page-title">
                <h1 className="enterprise-logo">TecnoLife</h1>
            </div>
            <div className="search-product">
                <input type="search" placeholder="Search for products"/>
            </div>
            <div className="page-links">
                <ul>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Nosotros</li>
                    <li>CRUD</li>
                </ul>
            </div>
        </header>
    )
  }