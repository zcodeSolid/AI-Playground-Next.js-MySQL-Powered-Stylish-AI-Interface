// src/app/layout.js
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import './globals.css';
import './style.css';

export default function Layout({ children }) {
  return (
    <html><body>
    <div>
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
    </body></html>
  );
}
