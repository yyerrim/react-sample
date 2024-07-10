import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Section from './Section';
import Article from './Article';
import Footer from './Footer';

function App() {
  // PDF 2.72
  const footerList = [
    '1. 830 - 들어맞는 숫자가 아예 없으므로 아웃. 이때부터 0, 3, 8이 후보에서 빠지므로 남는 숫자는 1, 2, 4, 5, 6, 7, 9다.',
    '2. 659 - 6이 있지만 위치가 다르므로 1볼. 게임 상으로는 어떤 숫자가 맞는지 모르기 때문에 가장 난감하다.',
    '3. 264 - 2가 있고 위치가 맞으며, 6이 있지만 위치가 다르므로 1스트라이크 1볼.',
    '4. 126 - 숫자는 전부 맞지만 위치는 6만 맞고 나머지 둘은 다르므로 1스트라이크 2볼.',
    '5. 216 - 전부 맞으므로 승리.'
  ];
  return (
    <div className="App">
      <Header />
      <hr></hr>{/* react에서는 여는 태그, 닫는 태그가 무조건 짝을 이뤄야함 = <hr /> */}
      <Section />
      <Article />
      {/* <Footer /> */}

      {/* PDF 2.72 */}
      <Footer list={footerList} />
    </div>
  );
}

export default App;
