import FaceIcon from "../assets/Facebook\ Icon.svg"
import Github from "../assets/GitHub\ Icon.svg"
import Insta from "../assets/Instagram\ Icon.svg"
import Twitter from "../assets/Twitter\ Icon.svg"
import '../App.css'
function Footer() {
  return (
      <footer className='footer-container'>
            <a href="https://twitter.com/cassiosoares99" target="_blank"><img src={ Twitter } alt="" /></a>
            <a href="https://www.facebook.com/cassio.0" target="_blank"><img src={ FaceIcon } alt="" /></a>
            <a href="https://www.instagram.com/cassiosoares9/" target="_blank"><img src={ Insta } alt="" /></a>
            <a href="https://github.com/cassio9" target="_blank"><img src={ Github } alt="" /></a>
      </footer>
  )
}

export default Footer