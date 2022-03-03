import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

class HomePage extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <Header />
          <div>Hi this is homepage</div>
          <Footer />
        </div>
      </>
    );
  }
}
export default HomePage;
