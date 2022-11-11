import React from 'react';
import Friend from '../Friend/Friend';

const Cousine = ({house}) => {
    return (
        <div>
            <h4>Cousine</h4>
            <p><small>House: {house}</small></p>
            <section>
                <Friend></Friend>
            </section>
        </div>
    );
};

export default Cousine;