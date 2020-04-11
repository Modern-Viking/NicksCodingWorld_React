import React from "react";

const Card = () => {

    return(
        <section>
            <div className="columns is-centered">
                <div className="column">
                    <div className="card projects">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={image} alt="Screenshot"/>
                            </figure>
                        </div>

                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                            <p className="subtitle is-6">{description}</p>
                        </div>

                        <footer className="card-footer">
                            <a href="https://github.com/TuckerV/soggybottomboys-project1" rel="noopener noreferrer" target="_blank" className="card-footer-item">{githubUrl}</a>
                            <a href="https://tuckerv.github.io/soggybottomboys-project1/" rel="noopener noreferrer" target="_blank" className="card-footer-item">{deployedUrl}</a>
                        </footer>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Card;