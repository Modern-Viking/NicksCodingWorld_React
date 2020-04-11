import React from "react";
import JsQuiz from "../../Images/js-quiz.jpg";
import PassGen from "../../Images/passGen.jpg";
import Planner from "../../Images/planner.jpg";
import SearchPage from "../../Images/search page.jpg";
import LeagueManager from "../../Images/leagueManager.png";
import Burger from "../../Images/buger.jpg";

const ProjectsArea = () => {

  return (
<section className="hero is-dark is-fullheight has-text-centered">
  <div className="hero-body">
    <div className="container">
      <h1 id="aboutTitle" className="title">Projects / Creations</h1>

          <section>
              <div className="columns is-centered">

               <div className="column">
                <div className="card projects">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={SearchPage} alt="Streaming Site Screenshot"/>
                    </figure>
                  </div>

                   <div className="media-content">
                    <p className="title is-4">Soggy Bottom Streaming Search</p>
                    <p className="subtitle is-6">find where you can stream your favorite movies!</p>
                  </div>

              <footer className="card-footer">
                <a href="https://github.com/TuckerV/soggybottomboys-project1"
                rel="noopener noreferrer" target="_blank" className="card-footer-item">Github Repo</a>
                <a href="https://tuckerv.github.io/soggybottomboys-project1/" rel="noopener noreferrer" target="_blank" className="card-footer-item">Deployed Site</a>
              </footer>

            </div>
          </div>


  <div className="column">
    <div className="card projects">
        <div className="card-image">
            <figure className="image is-4by3">
                <img src={Planner} alt="Daily Planner Screenshot"/>
            </figure>
        </div>

    <div className="media-content">
      <p className="title is-4">Daily Planner</p>
      <p className="subtitle is-6">A daily planner app made with javascript.</p>
    </div>

<footer className="card-footer">
    <a href="https://github.com/Modern-Viking/planYourDay" rel="noopener noreferrer" target="_blank" className="card-footer-item">Github Repo</a>
    <a href="https://modern-viking.github.io/planYourDay/" rel="noopener noreferrer" target="_blank" className="card-footer-item">Deployed Site</a>
  </footer>

</div>
</div>

<div className="column">
  <div className="card projects">
      <div className="card-image">
          <figure className="image is-4by3">
            <img src={JsQuiz} alt="JS Quiz Screenshot"/>
          </figure>
      </div>

  <div className="media-content">
    <p className="title is-4">Javascript Quiz</p>
    <p className="subtitle is-6">A Quiz app made with javascript.</p>
  </div>

<footer className="card-footer">
  <a href="https://github.com/Modern-Viking/quizTime" rel="noopener noreferrer" target="_blank" className="card-footer-item">Github Repo</a>
  <a href="https://modern-viking.github.io/quizTime/" rel="noopener noreferrer" target="_blank" className="card-footer-item">Deployed Site</a>
</footer>

</div>
</div>
</div>

<div className="columns is-centered">

  <div className="column">
   <div className="card projects">
     <div className="card-image">
       <figure className="image is-4by3">
         <img src={Burger} alt="burger eater Screenshot"/>
       </figure>
     </div>

      <div className="media-content">
       <p className="title is-4">Eat the burger!</p>
       <p className="subtitle is-6">A burger Tracking app using MySQL, Express, and MVC.</p>
     </div>

 <footer className="card-footer">
   <a href="https://github.com/Modern-Viking/burgerEater" rel="noopener noreferrer" target="_blank" className="card-footer-item">Github Repo</a>
   <a href="https://gourmet-burger-eater.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="card-footer-item">Deployed Site</a>
 </footer>

</div>
</div>


<div className="column">
<div className="card projects">
<div className="card-image">
<figure className="image is-4by3">
  <img src={PassGen} alt="Password Generator Screenshot" />
</figure>
</div>

<div className="media-content">
<p className="title is-4">Password Generator</p>
<p className="subtitle is-6">A Password Generator made with javascript.</p>
</div>

<footer className="card-footer">
<a href="https://github.com/Modern-Viking/passwordGenerator" rel="noopener noreferrer" target="_blank" className="card-footer-item">Github Repo</a>
<a href="https://modern-viking.github.io/passwordGenerator/" rel="noopener noreferrer" target="_blank" className="card-footer-item">Deployed Site</a>
</footer>

</div>
</div>

<div className="column">
  <div className="card projects">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={LeagueManager} alt="League ManagerScreenshot"/>
      </figure>
    </div>

<div className="media-content">
<p className="title is-4">League Manager</p>
<p className="subtitle is-6">Manage your rec league all from one spot</p>
</div>

              <footer className="card-footer">
                <a href="https://github.com/seanianking/SoggyBottomboys-Project2" rel="noopener noreferrer" target="_blank" className="card-footer-item">Github Repo</a>
                <a href="https://soggybottomleaguemanager.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="card-footer-item">Deployed Site</a>
              </footer>

            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</section>
)
};

export default ProjectsArea;