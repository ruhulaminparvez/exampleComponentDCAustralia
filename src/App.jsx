import './App.css'
import imgData from './assets/apartment.jpeg';

const DummyData = [
  {
    id: 1,
    img: imgData,
    title: 'ABC: Project A',
    description: 'Description 1',
  },
  {
    id: 2,
    img: imgData,
    title: 'ABC: Project B',
    description: 'Description 2',
  },
  {
    id: 3,
    img: imgData,
    title: 'ABC: Project C',
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
