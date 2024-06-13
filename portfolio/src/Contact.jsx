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
                        <textarea name="message" id="message"></textarea>
                        </div>
                    </div>
                    
                    <button type="submit">Send</button>
                    <div className='contact-icons'>
                        <a href='https://github.com/Eyiladeogo' target='blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" id="Github"><rect width="48" height="48" fill="#03045e" rx="24" class="color000000 svgShape"></rect><path fill="#ffffff" fill-rule="evenodd" d="M31.4225 46.8287C29.0849 47.589 26.5901 48 24 48C21.4081 48 18.9118 47.5884 16.5728 46.8272C17.6533 46.9567 18.0525 46.2532 18.0525 45.6458C18.0525 45.3814 18.048 44.915 18.0419 44.2911C18.035 43.5692 18.0259 42.6364 18.0195 41.5615C11.343 43.0129 9.9345 38.3418 9.9345 38.3418C8.844 35.568 7.2705 34.8294 7.2705 34.8294C5.091 33.3388 7.4355 33.369 7.4355 33.369C9.843 33.5387 11.1105 35.8442 11.1105 35.8442C13.2525 39.5144 16.728 38.4547 18.096 37.8391C18.3135 36.2871 18.9345 35.2286 19.62 34.6283C14.2905 34.022 8.688 31.9625 8.688 22.7597C8.688 20.1373 9.6225 17.994 11.1585 16.3142C10.911 15.7065 10.0875 13.2657 11.3925 9.95888C11.3925 9.95888 13.4085 9.31336 17.9925 12.4206C19.908 11.8876 21.96 11.6222 24.0015 11.6114C26.04 11.6218 28.0935 11.8876 30.0105 12.4206C34.5915 9.31336 36.603 9.95888 36.603 9.95888C37.9125 13.2657 37.089 15.7065 36.8415 16.3142C38.3805 17.994 39.309 20.1373 39.309 22.7597C39.309 31.9849 33.6975 34.0161 28.3515 34.6104C29.2125 35.3519 29.9805 36.8168 29.9805 39.058C29.9805 41.2049 29.9671 43.0739 29.9582 44.3125C29.9538 44.9261 29.9505 45.385 29.9505 45.6462C29.9505 46.2564 30.3401 46.9613 31.4225 46.8287Z" clip-rule="evenodd" class="colorffffff svgShape"></path></svg>
                        </a>
                        <a href='https://x.com/kaniell_0utis' target='blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512" id="twitter"><g clip-path="url(#clip0_84_15697)" fill="#03045e" class="color000000 svgShape"><rect width="512" height="512" fill="#03045e" rx="60" class="color000000 svgShape"></rect><path fill="#ffffff" d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z" class="colorffffff svgShape"></path></g><defs><clipPath id="clip0_84_15697"><rect width="512" height="512" fill="#ffffff" class="colorffffff svgShape"></rect></clipPath></defs></svg>
                        </a>
                        <a href='https://www.linkedin.com/in/adedayoadeogo' target='blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 5 1036 990" id="Linkedin"><path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z" fill="#03045e" class="color000000 svgShape"></path></svg>
                        </a>                
                    </div>
                    
                    
                </form>
            </div>
        </section>
    )
}