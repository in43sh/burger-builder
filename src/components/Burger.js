import React from 'react';
import Bacon from './Bacon/Bacon';
import Cheese from './Cheese/Cheese';
import Meat from './Meat/Meat';
import Salad from './Salad/Salad';

function Burger(props) {
    // destructuring keys of props.ingridients into 4 variables: salad, meat, cheese, bacon
    // props.ingridients comes from state.ingredients of component App.js
    const {salad, meat, cheese, bacon} = props.ingredients;

    // creating arrays from Salad, Meat, Cheese and Bacon components
    // as well using quantity that is stated in count property of each ingredient.
    let ingredients = [];
    for (let i = 0; i < salad.count; i++) ingredients.push(<Salad/>);
    for (let i = 0; i < bacon.count; i++) ingredients.push(<Bacon/>);
    for (let i = 0; i < cheese.count; i++) ingredients.push(<Cheese/>);
    for (let i = 0; i < meat.count; i++) ingredients.push(<Meat/>);

    return <div className="Burger">
        <div className="BreadTop">
            <div className="Seeds1"/>
            <div className="Seeds2"/>
        </div>
        {ingredients}
        <div className="BreadBottom"/>
    </div>
}

export default Burger