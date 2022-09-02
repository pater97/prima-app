
import './App.css';
import Button from './components/ui/Button';
import ButtonTwo from './components/ui/ButtonTwo';
import ButtonTrhee from './components/ui/ButtonTrhee';

function App() {
  return (
    <div className="App">
      <Button
        label={'prova'}
        bgColor={'red'}
      />
      <ButtonTwo
        label={'prova2'}
        objCss={
          {
            backgroundColor:'green',
            width:'150px',
            padding:'2rem'
          }
        }
      />
      <ButtonTrhee
        label={'prova3'}
        classCss={'buttonClass'}
      />
    </div>
  );
}

export default App;
