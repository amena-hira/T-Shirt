import React from 'react';
import Cousine from '../Cousine/Cousine';

const Aunty = ({house}) => {
    return (
        <div>
            <h3>Aunty</h3>
            <p><small>House: {house}</small></p>
            <section className='flex'>
                <Cousine house={house}></Cousine>
                <Cousine house={house}></Cousine>
            </section>
        </div>
    );
};

export default Aunty;