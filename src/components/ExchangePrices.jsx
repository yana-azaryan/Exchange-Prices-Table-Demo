import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styles from "./ExchangePrices.module.scss";
import _ from 'lodash';
import Pagination from './pagination/Pagination';
import NomicsCaption from './nomicsCaption/NomicsCaption';
import Table from './table/Table';

const ExchangePrices = () => {
    //I fetched the exchanges data from this component now however we would get it from SS in futue, the same for keyMetrics,  dataPerPage, CoinData
    const [exchanges, setExchanges] = useState();
    const [paginatedPrices, setPaginatedPrices] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(5);

    const keyMetrics = {
        date: 'As Of Jul 27, 2022, 10:58 AM'
    };

    const coinData = {
        name: 'Bitcoin',
        symbol: '(BTC)',
    };

    useEffect(() => {
        axios.get('https://forbes-digital-assets-api-dev-saebtce27a-uk.a.run.app/fundamentals/24h/btcusd')
        .then(res => {
            setExchanges(res.data.exchanges);
            setPaginatedPrices(_(res.data.exchanges).slice(0).take(dataPerPage).value());
        })
    }, [])

    const pagination = (pageNum) => {
        const startIndex = (pageNum-1)*dataPerPage;
        setCurrentPage(pageNum);
        setPaginatedPrices(_(exchanges).slice(startIndex).take(dataPerPage).value());
    }

    return (
        <div className={styles.table_container}>
            {paginatedPrices &&
                <div className={styles.fda_prices}>
                    <h2 className={styles.fda_prices__title}>{coinData.name} {coinData.symbol} Prices</h2>
                    <Table paginatedPrices={paginatedPrices} />
                    <NomicsCaption keyMetrics={keyMetrics} />
                </div>
            }
            <Pagination dataPerPage={dataPerPage} currentPage={currentPage} exchangesLength={exchanges?.length} pagination={pagination} />
        </div>
    );
}

export default ExchangePrices;
