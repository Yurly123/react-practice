import { Fragment, useEffect, useState } from 'react'
import CoinSelection from './CoinSelction'

function App() {
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  useEffect(() => {
    const coinAPIUrl = 'https://api.coinpaprika.com/v1/tickers'
    fetch(coinAPIUrl)
      .then(response => response.json())
      .then(data => {
        setCoins(data)
        setLoading(false)
      })
  })
  return (
    <Fragment>
      <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> :
        <CoinSelection coins={coins} />
      }
    </Fragment>
  );
}

export default App;