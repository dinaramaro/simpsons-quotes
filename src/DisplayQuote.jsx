import React from 'react';

function DisplayQuote ({quote}) {
    return (
        <div>
            <ul>
                <li>{quote.quote}</li>
                <li>{quote.character}</li>
                <img src={quote.image} alt="simpsons" />
            </ul>
        </div>
    );
};

export default DisplayQuote;