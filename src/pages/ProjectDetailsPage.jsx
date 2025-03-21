import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export default function ProjectDetailsPage() {

    const { id } = useParams()
    const api_server = import.meta.env.VITE_API_SERVER
    const [project, setProject] = useState({})

    function fetchProjectDetails(url = `${api_server}/${id}`) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProject(data.data)
            }).catch(err => console.error(err))
    }

    useEffect(fetchProjectDetails, [])

    return (
        <>
            <div className="container">
                <h1 className="d-flex justify-content-between align-items-center">
                    {project.name}
                    <Link to={"/projects"} className="btn btn-secondary" >Indietro</Link>
                </h1>
                <p><strong>Cliente: </strong>{project.client ? project.client : "Nessun cliente"}</p>
                <p><strong>Tipo: </strong>{project.type?.name}</p>
                <p><strong>Tecnologie: </strong>{project.technologies?.map(technology =>
                    <span className="badge me-2" key={technology.id} style={{ backgroundColor: technology.color }}> {technology.name}</span>
                )}</p>
                <p><strong>Data inizio: </strong>{project.started}</p>
                <p><strong>Data fine: </strong>{project.finished ? project.finished : "In corso"}</p>
                <p><strong>Descrizione: </strong>{project.description}</p>
            </div >
        </>
    )
}