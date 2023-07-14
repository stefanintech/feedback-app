import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

function AboutPage() {
    return (
        <Card>
        <div className="about">
            <h1>About This Project</h1>
            <p>React application to leave feedback for the School NCO.</p>
            <p>Version: 1.0.0</p>
            <ul style={{display: 'inline-flex', gap: '10px', color: 'white'}}>
                <li><a href="https://www.linkedin.com/in/stefantaitano/" target="_blank"><i class="fa-brands fa-linkedin-in fa-lg"></i></a></li>
                <li><a href="https://twitter.com/codewithfan" target="_blank"><i class="fa-brands fa-twitter fa-lg"></i></a></li>
                <li><a href="https://github.com/codewithfan" target="_blank"><i class="fa-brands fa-github fa-lg"></i></a></li>
                <li><a href="https://medium.com/@stefantaitano" target="_blank"><i class="fa-brands fa-medium fa-lg"></i></a></li>
                <li><a href="mailto:stefantaitano@gmail.com"><i class="fa-solid fa-envelope fa-xl"></i></a></li>
            </ul>
            <p>
                <Link to="/">Back To Home</Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage
