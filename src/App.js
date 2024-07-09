import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Section from './Section';
import Article from './Article';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <hr></hr>{/* react에서는 여는 태그, 닫는 태그가 무조건 짝을 이뤄야함 */}
      <Section />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
