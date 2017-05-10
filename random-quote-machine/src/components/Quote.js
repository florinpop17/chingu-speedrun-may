import React from 'react';

const Quote = ({ text, author }) => (
    <div className="quote">
        <p>{ text } { author } </p>
    </div>
)

export default Quote;
