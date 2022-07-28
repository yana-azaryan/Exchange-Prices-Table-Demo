import PropTypes from 'prop-types';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import styles from './Pagination.module.scss'

const Pagination = ({ currentPage, dataPerPage, exchangesLength, pagination }) => {
    return (
        <nav className={styles.pagination_container}>
            <button
                className={styles.prev}
                disabled={currentPage==1}
                onClick={()=> pagination(currentPage-1)}>
                    <ArrowCircleLeftIcon />
            </button>
            <div className={styles.viewing}>
                Viewing {(currentPage - 1)*dataPerPage}-{(currentPage -1)*dataPerPage + dataPerPage}  of {exchangesLength} exchanges
            </div>
            <button
                className={styles.next}
                disabled={currentPage==Math.ceil(exchangesLength/dataPerPage)}
                onClick={()=> pagination(currentPage+1)}>
                    <ArrowCircleRightIcon />
            </button>
        </nav>
    );
}

Pagination.propTypes = {
    exchangesLength: PropTypes.number,
    dataPerPage: PropTypes.number,
    currentPage: PropTypes.number,
    pagination: PropTypes.func,
};

export default Pagination;
