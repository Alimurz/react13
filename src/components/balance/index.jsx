import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCashActionCreator, clearCashActionCreator, getCashActrionCreator } from "../../redux/cash/action";


const Balance = () => {
    const cashState = useSelector(state => state.cashReducer.cash)
    const dispatch = useDispatch()
    const handleCashClearCounter =() => {
        dispatch(clearCashActionCreator())
    }
    return (
        <div>
            balance - {cashState}
            <button onClick={() => dispatch(addCashActionCreator(Number(prompt())))}>
                пополнить              
            </button>
            <button onClick={() => dispatch(getCashActrionCreator(Number(prompt())))}>
                снять
            </button>
            <button onClick={handleCashClearCounter}>Clear</button>
        </div>
    )
}

export default Balance;