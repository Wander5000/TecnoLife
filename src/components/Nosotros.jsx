export function Nosotros({Titulo, Descripcion}){
    return(
        <>
            <h2 className="about-title">{Titulo}</h2>
            <div className="about-text-limitation">
                <p className="about-description">{Descripcion}</p>
            </div>
        </>
    )
  }