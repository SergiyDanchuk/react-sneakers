import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

const arr = [
  {title: 'Чоловічі кросівки  Nike Blazer Mid Suede', price: 12999 , imageUrl: '/img/sneakers/1.jpg' },
  {title: 'Чоловічі кросівки Nike Air Max 270', price: 4999, imageUrl: '/img/sneakers/2.jpg' },
  {title: 'Чоловічі кросівки Nike Blazer Mid Suede', price: 15600, imageUrl: '/img/sneakers/3.jpg' },
  {title: 'Кросівки Puma X Aka Boku Future Rider', price: 12999, imageUrl: '/img/sneakers/4.jpg' }
]

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
        {
          arr.map( (obj) => (
            <Card
              title = { obj.title }
              price = { obj.price }
              imageUrl = { obj.imageUrl }
            />
          ))
        }
      </div>
    </div>
  </div>;
}

export default App;
