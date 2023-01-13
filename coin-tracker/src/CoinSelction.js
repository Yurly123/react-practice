import { Fragment, useState } from 'react'

function CoinSelection({ coins }) {
    const [selectedCoin, setSelectedCoin] = useState(formatCoin(coins[0]))
    const [money, setMoney] = useState(0)
    return (
        <Fragment>
            <select onChange={onSelectChange}>
                {coins.map(coin => <option>
                    {formatCoin(coin)}
                </option>)}
            </select>
            <br />
            <input type={'number'} onChange={onInputChange} value={money}></input>
            <h5>You can purchase {getPurchaseableAmount()} of {getNameOfCurrentCoin()}</h5>
        </Fragment>
    )
    function onSelectChange(eventArg) {
        setSelectedCoin(eventArg.target.value)
    }
    function onInputChange(eventArg) {
        setMoney(eventArg.target.value)
    }
    function getPurchaseableAmount() {
        const price = parseFloat(selectedCoin.match('[0-9]+.[0-9]+ '))
        return Math.floor(money / price)
    }
    function getNameOfCurrentCoin() {
        const nameOfCurrentCoin = selectedCoin.match('^([a-z]|[A-Z])+').slice(0, -1)
        return nameOfCurrentCoin
    }
}

function formatCoin(coin) {
    return `${coin.name} (${coin.symbol}) : $${coin.quotes.USD.price} USD`
}

export default CoinSelection