import PropTypes from 'prop-types';
import styles from './NomicsCaption.module.scss'

const NomicsCaption = ({ keyMetrics, attributionBadge }) => {
    return (
        <div className={styles.price__tabs_data_nomics}>
            <div className={styles.price__tabs_date}>{keyMetrics.date}</div>
            {/* Here should be added the attributionBadge*/}
        </div>
    );
}

NomicsCaption.propTypes = {
    keyMetrics: PropTypes.object,
    // attributionBadge
};

export default NomicsCaption;
