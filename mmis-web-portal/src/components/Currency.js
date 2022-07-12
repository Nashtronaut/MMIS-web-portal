import CurrencyFormat from 'react-currency-format';

const Currency = (props) => {
    const value = props.value;

    return (
        <CurrencyFormat value={value}
            displayType={'text'}
            thousandSeparator={true} prefix={'$ '}
            decimalScale={2}
            fixedDecimalScale={true} />
    );
};

export default Currency;