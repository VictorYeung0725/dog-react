import './App.css';
import DogInfo from './dogInfo';
import allDog from './dog';

console.log(allDog);

function App() {
  let randomApp = Math.floor(Math.random() * allDog.length);

  return (
    <div className="App">
      <DogInfo
        name={allDog[randomApp].name}
        img={allDog[randomApp].imgUrl}
        discribe={allDog[randomApp].discription}
      />
      <DogInfo
        name={allDog[1].name}
        img={allDog[1].imgUrl}
        discribe={allDog[1].discription}
      />
      <DogInfo
        name={allDog[2].name}
        img={allDog[2].imgUrl}
        discribe={allDog[2].discription}
      />
      <DogInfo
        name={allDog[3].name}
        img={allDog[3].imgUrl}
        discribe={allDog[3].discription}
      />
    </div>
  );
}

export default App;
