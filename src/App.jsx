import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setvalue] = useState('');

  return (
    <>
      <div className="main">
        <div className="calcu">
          <form action="">
            <div>
              <input className='inputbox' type="text" readOnly value={value} />
            </div>
            <div>
              <input type="button" value="AC" onClick={e => setvalue('')}/>
              <input type="button" value="DE" onClick={e => setvalue(value.slice(0, -1))}/>
              <input type="button" value="-" onClick={e => setvalue(value + e.target.value)}/>
              <input type="button" value="/" onClick={e => setvalue(value + e.target.value)}/>
            </div>
            <div>
              <input type="button" value="7" onClick={e => setvalue(value + e.target.value)}/>
              <input type="button" value="8" onClick={e => setvalue(value + e.target.value)}/>
              <input type="button" value="9" onClick={e => setvalue(value + e.target.value)}/>
              <input type="button" value="*" onClick={e => setvalue(value + e.target.value)}/>
            </div>
            <div>
              <input type="button" value="4" onClick={e => setvalue(value + e.target.value)}/>
              <input type="button" value="5" onClick={e => setvalue(value + e.target.value)}/>
              <input type="button" value="6" onClick={e => setvalue(value + e.target.value)}/>
              <input type="button" value="+" onClick={e => setvalue(value + e.target.value)}/>
            </div>
            <div>
              <input type="button" value="1" onClick={e => setvalue(value + e.target.value)}/>
              <input type="button" value="2" onClick={e => setvalue(value + e.target.value)}/>
              <input type="button" value="3" onClick={e => setvalue(value + e.target.value)}/>
              <input type="button" value="-" onClick={e => setvalue(value + e.target.value)}/>
            </div>
            <div>
              <input type="button" value="0" onClick={e => setvalue(value + e.target.value)}/>
              <input type="button" value="00" onClick={e => setvalue(value + e.target.value)}/>
              <input type="button" value="=" className='eq'onClick={e => setvalue(eval(value))}/>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
