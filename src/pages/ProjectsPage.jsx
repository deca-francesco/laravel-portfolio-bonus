import { useEffect, useState } from "react"
import ProjectCard from "../components/ProjectCard";



export default function ProjectsPage() {

    const api_server = import.meta.env.VITE_API_SERVER
    const [projectsData, setProjectsData] = useState([])


    function fetchProjects(url = api_server) {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProjectsData(data.data)
            }).catch(err => console.error(err))
    }

    useEffect(fetchProjects, [])

    return (
        <>
            <div className="container">
                <h1>Tutti i progetti</h1>
                <div className="row row-cols-1 g-5 mt-1 mb-5">
                    {projectsData?.map(project => <ProjectCard key={project.id} project={project} />)}
                </div>
            </div>
        </>
    )
}