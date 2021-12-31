import React from "react";
import {ButtonSearch, Header, Navbar} from './styles';
import '../../App.css'

function HomePage(){
  return (
    <div className="body">
      <Header>
        <h3>Pokédex</h3>
      </Header>
      <Navbar>
        <div className="titleNav">
          <form>
            <label>Name or Number <br />
              <input type="text" name="name" />
              <ButtonSearch />
            </label>
          </form>
        </div>
        <div className="empty" />
      </Navbar>
    </div>
  )
}

export default HomePage;