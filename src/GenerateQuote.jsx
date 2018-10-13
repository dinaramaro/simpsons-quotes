import React from 'react';

function GenerateQuote ({selectQuote}) {
return (
    <div>
        <button onClick={selectQuote}>Change quote</button>
    </div>
)
}

export default GenerateQuote;