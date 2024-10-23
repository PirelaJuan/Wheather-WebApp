
import './App.css'

function App() {
  

  return (
    <div className='App'>
      <div className='App-sidebar'>
        <div className='Header'>
          <h3>CloudWatch</h3>
        </div>
        <div className='Menu'>
          <ul>
            <li className='Menu-item'>
              <a className='menu-link'>
                <i className='fas fa-tachometer-alt'></i>
                <div>🖼️Dashboard</div>
              </a>
            </li>
            <li className='Menu-item'>Search</li>
            <li className='Menu-item'>About</li>
          </ul>
        </div>
      </div>
      <div className='App-page'>
        <div className='App-row'>
          <div className='Card'>
            <h1 className='number'>New York</h1>
            <h2>New York, USA</h2>
          </div>
          <div className='Card'>
            <h1 className='number'>99%</h1>
            <h2>Humidity Porcentage</h2>
          </div>
          <div className='Card'>
            <h1 className='number'>☀️</h1>
            <h2>Forecast</h2>
          </div>
        </div>
        <div className='App-row'>
          <div className='List'>
            <div className='filter'>
              <div className='dateFilter'>
                <input type="text" placeholder='Enter Date'/>
              </div>
              <div className='humidityFilter'>
                <label htmlFor="">Humidity:</label>
                <input type="range" name='humidity' min={0.0} max={1.0} step={0.1}/>
              </div>
              <button className='btn'>Search</button>
            </div>
            <div className='table'>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Temperature</th>
                    <th>Time</th>
                    <th>Humidity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Hello</td>
                    <td>Hello</td>
                    <td>Hello</td>
                    <td>Hello</td>
                  </tr>
                  <tr>
                    <td>Hello</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                  </tr>
                  <tr>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                  </tr>
                  <tr>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                  </tr>
                  <tr>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                  </tr>
                  <tr>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                  </tr>
                  <tr>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                  </tr>
                  <tr>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
