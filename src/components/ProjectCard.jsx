import { Link } from "react-router-dom";


export default function ProjectCard({ project }) {

    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <div className="card-body">
                        <h4>{project.name}</h4>
                        <p><strong>Tipo: </strong>{project.type.name}</p>
                        <p><strong>Descrizione: </strong>{project.description}</p>
                    </div>
                    <div className="card-footer pt-2">
                        <Link to={`/projects/${project.id}`} className="btn btn-primary">Dettagli</Link>
                    </div>
                </div>
            </div>
        </>
    )
}