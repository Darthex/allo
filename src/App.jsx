import React from "react";
import TagBar from "./components/TagBar.jsx";
import MealList from "./components/MealList.jsx";
import Passenger from "./components/Passenger.jsx";
import data from "./assets/allo-fullstack-assignment-dataset.json"

export default function App() {
    const [tag, setTag] = React.useState('')
    const [bill, setBill] = React.useState(0)

    function handleSelectedTag(tagId) {
        if (tag !== tagId) {
            return setTag(tagId)
        }
        return setTag('')
    }

    function handleBill(price) {
        setBill(price)
    }

    return (
        <div className="page-container">
            <section className="section1">
                <TagBar labels={data.labels} selectTag={handleSelectedTag}/>
                <hr style={{borderColor: 'black', height: '1px', width: '90%'}}/>
                <MealList meals={tag ? data.meals.filter((value) => value.labels.includes(tag)) : data.meals}
                          bill={handleBill}/>
            </section>
            <section className="section2">
                <Passenger bill={bill}/>
            </section>
        </div>
    )
}
