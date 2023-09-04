import React from "react";
import Drinks from "./Drinks.jsx";

export default function MealItem(props) {
    const [drink, setDrink] = React.useState('')
    const [drinkT, setDrinkT] = React.useState('')
    const [drinkPrice, setDrinkPrice] = React.useState(0)
    const [buttonFlag, setButtonFlag] = React.useState(false)

    function handleSelectedDrink(drinkId, drinkTitle) {
        if (drink !== drinkId) {
            setDrinkT(drinkTitle)
            setDrink(drinkId)
        } else {
            setDrinkT('')
            setDrink('')
        }
    }
    function handleButton() {
        if(!buttonFlag) {
            props.bill(props.price + drinkPrice)
        } else {
            props.bill(0)
        }
    }
    function getDrinkPrice(drinkPrice) {
        setDrinkPrice(drinkPrice)
    }

    return (
        <div className="menu-item-layout">
            <img src={props.thumbnail} alt="" className="thumbnail"/>
            <div className="item-details">
                <h3>{props.title} + Drinks</h3>
                <p>Starter: {props.starter}</p>
                <p>Dessert: {props.desert}</p>
                <p>Selected Drink: {drinkT}</p>
                <div className="item-details-bottom">
                    {props.drinks.map((value) => <Drinks key={value.id} id={value.id} title={value.title} price={value.price}
                                                         drinkPrice={getDrinkPrice}
                                                         handleDrink={handleSelectedDrink}/>)}
                    <div className="price-info">
                        <p>{props.price}</p>
                        <button className={`select-button ${buttonFlag && "active"}`}
                                onClick={() => {
                                    setButtonFlag(prevState => !prevState)
                                    handleButton()
                                }}>Select
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
// {props.mealId === props.selectedDrink.mealId ? props.selectedDrink.drinkId : ""}
