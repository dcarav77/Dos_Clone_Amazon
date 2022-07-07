import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { AmazonProvider } from '/Users/dcarav77/dos_clone_amazon/Context/AmazonContext.js'

function MyApp({ Component, pageProps }) {
  
  return (
    <MoralisProvider
      serverUrl= 'https://ozaticmdyg4y.usemoralis.com:2053/server'
      appId= 'MDaIMJEOf7BUSEQurbtBanhJjtzMEPsrOtOLoyYX'
      
    >
      <AmazonProvider>
        <Component {...pageProps} />
      </AmazonProvider>
    
  </MoralisProvider >
        
  )
}
export default MyApp
