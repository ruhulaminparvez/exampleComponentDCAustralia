import './App.css'
import imgData from './assets/apartment.jpeg';

const DummyData = [
  {
    id: 1,
    img: imgData,
    title: 'Title 1',
    description: 'Description 1',
  },
  {
    id: 2,
    img: imgData,
    title: 'Title 2',
    description: 'Description 2',
  },
  {
    id: 3,
    img: imgData,
    title: 'Title 3',
    description: 'Description 3',
  }
]

function App() {

  return (
    <main className='mainContainer'>
      <div className="container">
        {DummyData?.map((item, idx) => {
          return (
            <div className='cardItems' key={idx+1}>
              <div className='cardImg'>
                <img src={item?.img} alt="apartment" />
              </div>
              <div className='cardContent'>
                <h2>{item?.title}</h2>
                <p>{item?.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default App
