import { ProjectCard } from "./ProjectCard"

const taskifyDescription = 'Taskify is a task management web application designed to help users efficiently manage their tasks and stay organized. Built with a modern tech stack, Taskify allows users to add, edit, delete, and mark tasks as complete, providing a seamless and intuitive user experience.'

export default function Work(){
    return(
        <>
            <section className="work" id="work">
                <h1>work.</h1>
                <p>Welcome to my portfolio! Here, you'll find a collection of projects that showcase my skills and expertise in web development. Each project represents a unique challenge and an opportunity to grow as a developer. From fullstack applications to innovative web solutions, I've poured my heart and soul into creating work that I'm proud of. Scroll down to explore my projects and see how I can bring your ideas to life.</p>
                <div className="projects">
                    <ProjectCard
                        imageSource="src/assets/taskify_screenshot.png"
                        name="Taskify"
                        description={taskifyDescription}
                        liveUrl="https://taskify-adeogo.vercel.app/"
                    />                    
                </div>
            </section>
        </>
    )
}