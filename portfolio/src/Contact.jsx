export default function Contact(){
    return (
        <section className="contact" id="contact">
            <h1>contact.</h1>
            <h3>Send me a message!</h3>
            <h5>Have a question, proposal, or just want to say hi? Feel free to reach out!</h5>
            <div className="contact-form">
                <form action="https://formspree.io/f/mayrroyv" method="POST">
                    <div className="flex-area">
                        <div className="form-group">
                            <label htmlFor="name">Your Name </label>
                            <input type="text" name="name" id="name" placeholder="Enter your Name"/>
                        </div>
                        <div className="form-group" style={{textAlign:"left"}}>
                            <label htmlFor="email">Your Email </label>
                            <input type="email" name="email" id="email" placeholder="Enter your Email"/>
                        </div>
                        <div className="form-group-full">
                        <label htmlFor="message">Message: </label>
                        <textarea name="message" id="message" placeholder="Tell me all about your next project!! 🛠️"></textarea>
                        </div>
                    </div>
                    
                    <button type="submit">Send</button>
                    
                    
                </form>
            </div>
        </section>
    )
}