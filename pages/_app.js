import App from 'next/app';
import '../styles/globals.scss';
import { createWrapper } from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../redux/store';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    //Anything returned here can be accessed by the client
    return { pageProps: pageProps };
  }

  render() {
    //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;

const wrapper = createWrapper(makeStore);
//withRedux wrapper that passes the store to the App Component
export default wrapper.withRedux(MyApp);