import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

const App = () => {
  return  <div className="wrapper clear">
    <Drawer />
    <Header />
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Всі кросівки</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search"/>
          <input placeholder="Пошук..."/>
        </div>
      </div>
      <div className="d-flex">
        <Card />
      </div>
    </div>
  </div>;
}

export default App;
