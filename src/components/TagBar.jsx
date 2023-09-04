import React from "react";

export default function TagBar({labels, selectTag}) {
    return (
        <div className="tag-container">
            {
                labels.map((value) => <div className="tags" key={value.id} onClick={() => selectTag(value.id)}>
                    {value.label}
                </div>)
            }
        </div>
    )
}
