import Card from "./Card";
import { useEffect, useState } from "react";


function Cards(props){
    const { column1, column2, column3 } = props;

    // console.log(column1);
    // console.log(column2);
    // console.log(column3);

    return (
        <div className="cards">
            <div className="cards__column">
                {
                    column1.map((item, index) => (
                        <Card data={ item } key={item.id}/>
                    ))
                }
            </div>

            {
                !!column2.length ? (
                    <div className="cards__column">
                        {
                            column2.map((item, index) => (
                                <Card data={ item } key={item.id}/>
                            ))
                        }
                    </div>
                ) : ''
            }

            {
                !!column3.length ? (
                    <div className="cards__column">
                        {
                            column3.map((item, index) => (
                                <Card data={ item } key={item.id}/>
                            ))
                        }
                    </div>
                ) : ''
            }
            
        </div>
    );
}

export default Cards;