import React from 'react';

const Form = props => (
    <div className="container">
        <form className="row justify-content-center" onSubmit={props.getRecipe} style={{marginBottom: "2rem"}}>
            <input className="form__input col-xs-2" type="text" name="recipeName" placeholder="Search Recipe"/>
            <button className="form__button col-xs-2">Search</button>
        </form>
    </div>
    
);

export default Form;