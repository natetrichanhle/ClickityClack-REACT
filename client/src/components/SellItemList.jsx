import React, {useEffect, useState} from 'react'
import axios from 'axios'

const ItemList = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/item')
            .then(res => setItems(res.data));
    }, [])

    // const removeFromDom = itemId => {
    //     setItems(items.filter(item => item._id !== itemId))
    // }
    
    return (
        {items.map((item, index) => {
            <p key={index}>
                {item.name}
                {item.price}
            </p>
        })}
    )
}