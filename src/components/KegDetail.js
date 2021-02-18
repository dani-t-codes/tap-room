import React from 'react';
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingEdit, onClickingDelete } = props;
  return (
    <>
      <h2>Keg Details</h2>
      <hr />
      <h3>Name: {keg.name}</h3>
      <h3>Brand or Brewery: {keg.brand}</h3>
      { keg.priceByKeg > 90
      ? <h3 style={{color: 'red'}}>Cost per Keg: ${keg.priceByKeg}</h3>
      : <h3>Cost per Keg: ${keg.priceByKeg}</h3>}
      <h3>Alcohol Content: {keg.alcoholContent}%</h3>
      {keg.pintsLeft === 0 ?
      <h3>Out of stock! Better luck next time.</h3>
      : <h3>Pints Remaining: {keg.pintsLeft}</h3>}
      {keg.pintsLeft > 0 && keg.pintsLeft <= 10
      ? <h4><em>Almost Empty - get 'em while they're cold!</em></h4>
      : null}
      { keg.pintsLeft > 0
      ? <button onClick={props.onClickingBuy} className="btn btn-warningsuccess">Buy Pint</button>
      : <button onClick={props.onClickingRestock} className="btn btn-warninginfo">Restock Large Keg</button>}
      <button onClick={() => onClickingEdit(keg.id)} className="btn btn-warninginfo">Update Keg</button>
      <button onClick={() => onClickingDelete(keg.id)} className="btn btn-warningdanger">Delete Keg</button>
      <hr/>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingRestock: PropTypes.func
}

export default KegDetail;