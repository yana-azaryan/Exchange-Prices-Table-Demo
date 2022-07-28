import styles from './Table.module.scss';
import PropTypes from 'prop-types';

const Table = ({ paginatedPrices }) => {
    return (
        <table className={styles.fda_prices_table}>
            <thead>
                <tr className={styles.price__panel_row}>
                    <th className={styles.price__tabs_label}>Exchanges</th>
                    <th className={styles.price__tabs_label}>Exchanges Class</th>
                    <th className={styles.price__tabs_label}>Average Price</th>
                    <th className={styles.price__tabs_label}>Trading Volume</th>
                </tr>
            </thead>
            <tbody>
                {paginatedPrices.map((coin, index) => (
                    <tr className={styles.price__panel_row} key={index}>
                        <td className={styles.price__panel_name}>
                            <img className={styles.price_panel_logo}>{coin.logo}</img>
                            {coin.market}
                        </td>
                        <td className={styles.price__panel_price}>xxxxx</td>
                        <td className={styles.price__panel_price}>${(coin.close).toFixed(2)}</td>
                        <td className={styles.price__panel_price}>xxxxx</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

Table.propTypes = {
    paginatedPrices: PropTypes.object,
};

export default Table;
