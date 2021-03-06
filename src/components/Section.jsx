const React = require('react');


const Section = function ({ header, backgroundClass, children }) {
    return (
        <div style={{ minHeight: '20vh' }} className={'py-5 ' + backgroundClass}>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    {header ? <h1 className={header.classes}>
                        {header.title}
                    </h1> : <span></span>}
                </div>
                <div className="row">
                    <div className="offset-md-1 col-md-10">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

module.exports = Section;