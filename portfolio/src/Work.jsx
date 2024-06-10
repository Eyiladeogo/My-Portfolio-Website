function ProjectCard({imageSource, name, description}){
    return(
        <div className="work-explanation">
            <img src={imageSource}/>
            <p>{name}</p>
            <p>{description}</p>
        </div>
    )
}

export default function Work(){
    return(
        <>
            <section className="work">
                <h1>work.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis. Id phasellus dui orci vulputate consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.</p>
                <div className="projects">
                    <ProjectCard
                        imageSource="https://picsum.photos/200"
                        name="Task 1"
                        description="Task Description"
                    />
                    <ProjectCard
                        imageSource="https://picsum.photos/200"
                        name="Task 2"
                        description="Task Description"
                    />
                    <ProjectCard
                        imageSource="https://picsum.photos/200"
                        name="Task 3"
                        description="Task Description"
                    />
                    
                </div>
            </section>
            
        </>
    )
}