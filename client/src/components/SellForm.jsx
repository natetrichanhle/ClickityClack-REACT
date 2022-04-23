import React, {useState} from "react";

export default (props) => {
    const {initialName, initialImage, initilaPrice, initialDescription,initialCategory, onSubmitProp} = props;
    // const [image, setImage] = useState(initialImage);
    const [name, setName] = useState(initialName);
    const [price, setPrice] = useState(initilaPrice);
    const [description, setDescription] = useState(initialDescription);
    const [category, setCategory] = useState(initialCategory);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ name, price, description, category })
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <h1>Post an item</h1>
            <p>
                <label>Name: </label>
                <input 
                    type="text" 
                    value={name} 
                    name='name' 
                    onChange={(e) => {setName(e.target.value)}} 
                />
            </p>
            <p>
                <label>Price: </label>
                <input
                    type="number"
                    value={price}
                    name='price'
                    onChange={(e) => {setPrice(e.target.value)}}
                />
            </p>
            <p>
                <label>Description: </label>
                <input 
                    type="text"
                    value={description}
                    name='description'
                    onChange={(e) => {setDescription(e.target.value)}}
                />
            </p>
            <p>
                <label>Category: </label>
                <select
                    value={category}
                    name='category'
                    onChange={(e) => {setCategory(e.target.value)}}
                >
                    <option>20% Keyboard</option>
                    <option>60% Keyboard</option>
                    <option>65% Keyboard</option>
                    <option>75% Keyboard</option>
                    <option>80% Keyboard</option>
                    <option>95% Keyboard</option>
                </select>
            </p>
            <input type="submit" />
        </form>
    )
} 