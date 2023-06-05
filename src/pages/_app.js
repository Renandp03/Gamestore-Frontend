import '@/styles/globals.css'
import App from 'next/app'
import { TokenProvider } from '../../contexts/tokenContext'
  
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <TokenProvider>
        <Component {...pageProps} />
      </TokenProvider>
    )
  }
}
