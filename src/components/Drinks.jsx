import React from "react";

export default function Drinks(props) {
    const [drinkFlag, setDinkFlag] = React.useState(false)

    function handleDrink() {
        if(!drinkFlag) {
            props.drinkPrice(props.price)
            console.log("Pressed")
        } else {
            props.drinkPrice(0)
        }
    }

    return (
        <p className={`drink-box ${drinkFlag && "active"}`}
           onClick={() => {
               props.handleDrink(props.id, props.title)
               setDinkFlag(prevState => !prevState)
               handleDrink()
           }
           }>{props.title}</p>
    )
}

// <p className={`drink-box ${drinkFlag ? "active": "deactive"}`} key={value.id}
//    onClick={() => {
//        props.handleDrink(value.id, props.mealId)
//        setDinkFlag(prevState => !prevState)
//    }
//    }>{value.title}</p>