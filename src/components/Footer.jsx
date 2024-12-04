import * as Scroll from 'react-scroll'

const {Link} = Scroll;

export function Footer(){
    return(
      <footer className="page-footer">
          <div className="page-links-foot">
                <ul className="page-links-list-foot">
                    <Link to="Inicio" spy={true} smooth={true} duration={500}>
                        <li className="page-link-foot">Inicio</li>
                    </Link>
                    <Link to="Productos" spy={true} smooth={true} duration={500} offset={-50}>
                        <li className="page-link-foot">Productos</li>
                    </Link>
                    <Link to="Nosotros" spy={true} smooth={true} duration={500} offset={-50}>
                        <li className="page-link-foot">Nosotros</li>
                    </Link>
                    <Link to="CRUD" spy={true} smooth={true} duration={500} offset={-50}>
                        <li className="page-link-foot">CRUD</li>
                    </Link>
                </ul>
                <ul className="page-links-list-foot">
                  <li className="page-link-foot">Facebook</li>
                  <li className="page-link-foot">Twitter / X</li>
                  <li className="page-link-foot">Instagram</li>
                  <li className="page-link-foot">Youtube</li>
                </ul>
                <ul className="page-links-list-foot">
                  <li className="page-link-foot">Terminos y condiciones</li>
                  <li className="page-link-foot">Politica de Privacidad</li>
                  <li className="page-link-foot">Noticias</li>
                </ul>
            </div>
          <h3 className='rights-reserved'>Todos los Derechos Reservados a <br/>TecnoLife y Joe Gil Findlay</h3>
      </footer>
    )
  }