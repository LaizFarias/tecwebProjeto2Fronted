import './App.css';
import Row from './componentes/Row';
import categorias from './api'; 
import Destaque from './componentes/Destaque';
import Logo from './componentes/Logo';


// passa a info pra pegar as categorias

function App() {
  return (
    <div className="App">


      <Logo />
      <Destaque />
      {categorias.map((category) => {
        return (
          <Row
            key={category.name}
            title={category.title}
            path={category.path}
            grande={category.grande}
          />
        );
      })}


    </div>
  );
}

export default App;
