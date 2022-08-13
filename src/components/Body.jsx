import '../App.css'

function Body() {
  return (
    <div className="App">
      <div className="profile-img"></div>
      <main className="main-container">
        <h1 className="profile-title">Cassio Soares</h1>
        <h3 className="profile-highlight">Frontend Developer</h3>
        <p id="personal-website">cassiosoares.website</p>
        <section className="btn-container">
          <a href="mailto:cassiosoares9@hotmail.com"><button className="email-btn">Email</button></a>
          <a href="https://www.linkedin.com/in/cassio9" target="_blank"><button className="link-btn">Linkedin</button></a>
        </section>
        <section className="details-container">
          <h2 className="profile-sub">About</h2> input
          <p>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and I am always looking for new things
            to learn.
          </p>
          <h2 className="profile-sub">Interests</h2>
          <p>
            Exercise lover. Internet fanatic. Travel geek. Cycling enthusiast
          </p>
        </section>
      </main>
    </div>
  );
}

export default Body;
