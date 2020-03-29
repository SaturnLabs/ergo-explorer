import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  unspentSellOrdersByTokenIdStructSelector,
  unspentBuyOrdersByTokenIdStructSelector,
} from '../../selectors/orderBook';

import './table-orders.scss';
import environment from '../../config/environment';

export class TableOrdersComponent extends PureComponent<any> {
  sumQuantities = (orders: any) => {
    return orders.reduce(
      (total: number, order: any) => total + order.quantity,
      0
    );
  };

  getPercentage = (maxCumulative: any, cumulative: any) => {
    let fillPercentage = (maxCumulative ? cumulative / maxCumulative : 0) * 100;
    fillPercentage = Math.min(fillPercentage, 100); // Percentage can't be greater than 100%
    fillPercentage = Math.max(fillPercentage, 0); // Percentage can't be smaller than 0%
    return fillPercentage;
  };

  renderSellOrders = (orders: any, maxCumulative: any) => {
    let cumulative = 0;
    return orders.map((order: any, index: number) => {
      order.cumulative = cumulative += order.quantity;

      return (
        <tr key={index} className="ask">
          <td>
            {order.price} {environment.blockchain.coinName.toUpperCase()}
          </td>
          <td>{order.quantity}</td>
          <td
            className="fill-ask"
            style={{
              backgroundSize:
                this.getPercentage(maxCumulative, cumulative) + '% 100%',
            }}
          >
            {order.cumulative}
          </td>
        </tr>
      );
    });
  };

  renderBuyOrders = (orders: any, maxCumulative: any) => {
    let cumulative = 0;
    return orders.map((order: any, index: number) => {
      order.cumulative = cumulative += order.quantity;

      return (
        <tr key={index} className="bid">
          <td>
            {order.price} {environment.blockchain.coinName.toUpperCase()}
          </td>
          <td>{order.quantity}</td>
          <td
            className="fill-bid"
            style={{
              backgroundSize:
                this.getPercentage(maxCumulative, cumulative) + '% 100%',
            }}
          >
            {order.cumulative}
          </td>
        </tr>
      );
    });
  };

  render() {
    const { sellOrders, buyOrders } = this.props;
    const asks = sellOrders.data || [];
    const bids = buyOrders.data || [];

    const preparedAsks = asks.map((ask: any) => ({
      price:
        (ask.tokenPrice + ask.outputInfo.value) /
        ask.outputInfo.assets[0].amount /
        1000000,
      quantity: ask.outputInfo.assets[0].amount,
    }));

    const preparedBids = bids.map((bid: any) => ({
      price: bid.outputInfo.value / bid.tokenAmount / 1000000,
      quantity: bid.tokenAmount,
    }));

    const totalAsks = this.sumQuantities(preparedAsks);
    const totalBids = this.sumQuantities(preparedBids);
    const maxCumulative = Math.max(totalAsks, totalBids);

    const deepCopyArrayOfObj = (arr: any) =>
      arr.map((order: any) => Object.assign({}, order));

    // Deep copy and sort orders
    const askOrders = deepCopyArrayOfObj(preparedAsks).sort(
      (a: any, b: any) => a.price > b.price
    ); // ascending order
    const bidOrders = deepCopyArrayOfObj(preparedBids).sort(
      (a: any, b: any) => a.price < b.price
    ); // descending order

    if (sellOrders.isFetching || buyOrders.isFetching) {
      return (
        <div className="bi-orders">
          <p>Loading orders...</p>
        </div>
      );
    }

    if (!sellOrders.data && !buyOrders.data) {
      return (
        <div className="bi-orders">
          <p>Need to set token id</p>
        </div>
      );
    }

    return (
      <div className="bi-orders">
        <div className="bi-orders__content">
          <h2>Sell orders</h2>
          <table className="bi-orders__table orders-table">
            <thead>
              <tr>
                <th className="orders-table__th">Price</th>
                <th className="orders-table__th">Sell Quantity</th>
                <th className="orders-table__th">Sell Cumulative</th>
              </tr>
            </thead>
            <tbody>
              {this.renderSellOrders(askOrders, maxCumulative).reverse()}
            </tbody>
          </table>
        </div>
        <div className="bi-orders__content">
          <h2>Buy orders</h2>
          <table className="bi-orders__table orders-table">
            <thead>
              <tr>
                <th className="orders-table__th">Price</th>
                <th className="orders-table__th">Buy Quantity</th>
                <th className="orders-table__th">Buy Cumulative</th>
              </tr>
            </thead>
            <tbody>{this.renderBuyOrders(bidOrders, maxCumulative)}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  sellOrders: unspentSellOrdersByTokenIdStructSelector(state),
  buyOrders: unspentBuyOrdersByTokenIdStructSelector(state),
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableOrdersComponent);
