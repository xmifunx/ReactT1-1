import React from 'react';
import PropTypes from 'prop-types';
import ItemModel from '../model/ItemModel';
import classes from '../../css/storefunc.module.css';

function ShopItemFunc(props) {
    const {item} = props
    
    return (
        <div className={classes["main-content"]}>
            <h2>{item.brand}</h2>
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
            <div className={classes["description"]}>{item.descriptionFull}</div>
            <div className={classes["highlight-window mobile"]}><div className={classes["highlight-overlay"]}></div></div>
            <div className={classes["divider"]}></div>
            <div className={classes["purchase-info"]}>
                <div className={classes["price"]}>{item.currency}{item.price}</div>
                <button>Добавить в корзину</button>
            </div>
        </div>
    )
}


ShopItemFunc.propTypes = {
    item: PropTypes.instanceOf(ItemModel).isRequired,
  }
export default ShopItemFunc;