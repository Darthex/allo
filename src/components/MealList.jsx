import React from "react";
import MealItem from "./MealItem.jsx";

export default function MealList({meals, bill}) {
    return (
        <div className="menu-container">
            {
                meals.map((value) => {
                    return(
                        <>
                            <MealItem key={value.id}
                                      mealId={value.id}
                                      title={value.title}
                                      thumbnail={value.img}
                                      starter={value.starter}
                                      desert={value.desert}
                                      drinks={value.drinks}
                                      bill={bill}
                                      price={value.price} />
                            <hr style={{borderColor: 'black', height: '1px', width: '100%'}}/>
                        </>
                    )
                })
            }
        </div>
    )
}
