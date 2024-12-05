export function Nosotros({Titulo, Descripcion}){
    return(
        <>
            <div className="about-us">
                <h2 className="about-title">{Titulo}</h2>
                <p className="about-description">{Descripcion}</p>
            </div>
        </>
    )
  }