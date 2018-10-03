import PropTypes from 'prop-types';

const ROUND_FACTOR = 100;

function ShowPrice(props) {
    const { price } = props;
    const roundedToPenny = Math.round(price * ROUND_FACTOR);
    const finalPrice = roundedToPenny / ROUND_FACTOR;
    const priceToShow = (roundedToPenny % ROUND_FACTOR) ? finalPrice.toFixed(2) : finalPrice;
    return `£ ${priceToShow}`;
}

ShowPrice.propTypes = {
    price: PropTypes.number
  };

export default ShowPrice;
