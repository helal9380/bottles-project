import { useState } from "react";
import { useEffect } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addLC, storedLocalStorage } from "../../utility";
import Cart from "../Cart/Cart";


const Bottles = () => {
const [bottles, setBottles] = useState([])
const [card, setCard] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])

    useEffect(() => {
    if(bottles.length > 0) {
        const storedCartId = storedLocalStorage()
        const saveCart = []
        for(const id of storedCartId) {
            const bottle = bottles.find(bottle => bottle.id === id);
            if(bottle) {
                saveCart.push(bottle)
            }
        }
        console.log(saveCart)
        setCard(saveCart)
    }
    
}, [bottles])

    

    const handleAddToCart = (bottle) => {
        const newCart = [...card, bottle]
        setCard(newCart)
        addLC(bottle.id)
    }

    return (
        <div>
            <h2>All bottles here: {bottles.length}</h2>
            <Cart cart = {card}></Cart>
            <div className="bottles-container">
            {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart = {handleAddToCart}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;