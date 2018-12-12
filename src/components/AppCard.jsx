const React = require('react');

/*{ header, text, background }*/
const AppCard = function ({ title, image, text, button }) {
    return (
        <div className="app-card card shadow my-5">
            {image ? <img className="card-img-top" src={image} /> : <span></span>}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                {button ? button : <span></span>}
            </div>
        </div>
    );
}


module.exports = AppCard