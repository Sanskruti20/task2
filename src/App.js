import './App.css'
import { useState } from 'react'

function App() {
  const [users, setUser] = useState([])

  /* List of variables
   * users - current value
   * setUser - updated Value
   * loadUsers
   * apiResponse
   * id
   * login (variable same as api) - name
   * avatar_url
   */

  const loadUsers = async () => {
    const apiResponse = await fetch("https://reqres.in/api/users?page=1")
    const jsonResponse = await apiResponse.json()
    setUser(jsonResponse.data)
  }

  return (
    <div className="App">
      <div className="header">
        <h2>Web-application-task</h2>
        <button className="get-user-button" onClick={loadUsers}>
          Get Users
        </button>
      </div>

      <div className="list-container">
        <p>List of users fetched through API are shown below.</p>
        <ul>
          {users.map(({ id, first_name,last_name ,avatar, email }) => (
            <li key={id}>
              <div className="list-div">
                <div className="card">
                  <div>
                    <img className="profImg" src={avatar}></img>
                  </div>
                  <div className="profInfo">
                    <p><b>First Name : </b> {first_name}</p>
                    <p><b>Last Name : </b> {last_name}</p>
                    <p><b>Email : </b>{email}</p>
                    <p><b>avatar URL : </b> {avatar}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        
        
      </div>
    </div>
  )
}

export default App
