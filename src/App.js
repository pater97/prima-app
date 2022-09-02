
import './App.css';
import Button from './components/ui/Button';
import ButtonTwo from './components/ui/ButtonTwo';
import ButtonTrhee from './components/ui/ButtonTrhee';
import Input from './components/ui/Input';

function App() {

  function isFocus() {
    console.log('input a fuoco')
  }

  function isBlur() {
    console.log('input non a fuoco')
  }
  // e sta ad indicare il valore dell'input che sio trova all'interno dell'evento
  function isChanged(e) {
    console.log('input sta cambiando', e)
  }

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
            backgroundColor: 'green',
            width: '150px',
            padding: '2rem'
          }
        }
      />
      <ButtonTrhee
        label={'prova3'}
        classCss={'buttonClass'}
      />
      <Input
        objCss={
          {
            border: '2px solid orangered',
            textAlign: 'center',
            borderRadius: '5px'
          }
        }
        type={'text'}
        callBackChange={isChanged}
        callBackBlur={isBlur}
        callBack={isFocus}
        place={'prova input'}
      />
    </div>
  );
}

export default App;
