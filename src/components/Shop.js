import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index'

const Shop = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <h3 className="my-3">Deposit/Withdraw Money</h3>
            <button className="btn-primary mx-3" onClick={() => {dispatch(actionCreators.withdrawMoney(100))}}>-</button>
            Update Balance
            <button className="btn-primary mx-3" onClick={() => {dispatch(actionCreators.depositMoney(100))}}>+</button>
        </div>
    )
}

export default Shop
