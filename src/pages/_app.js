import '@/styles/globals.css'
import App from 'next/app'
import { TokenProvider } from '../../contexts/tokenContext'
import { AlertProvider } from '../../contexts/alertContext'
  
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <TokenProvider>
        <AlertProvider>
          <Component {...pageProps} />
        </AlertProvider>
      </TokenProvider>
    )
  }
}
