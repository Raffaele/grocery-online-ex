import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Loading from './components/Loading/Loading';
import GroceryPage from './components/GroceryPage/GroceryPage';
import ReloadDataPanel from './components/ReloadDataPanel/ReloadDataPanel';

import getStoredItems from './api/getStoredItems';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPending: true
    };
    this.loadData = this.loadData.bind(this);
    this.reloadData = this.reloadData.bind(this);
    this.loadData();
  }
  reloadData() {
    this.setState({
      isPending: true
    }, this.loadData);
  }
  loadData() {
    getStoredItems().then(
      data => {
        this.setState({
          isPending: false,
          isError: false,
          storeData: data.store.map((item, id) => ({
            ...item,
            id
          }))
        });
      },
      err => {
        this.setState({
          isPending: false,
          isError: true,
          err
        });
      }
    );
  }
  render() {
    return (
      <Grid bsClass="container">
        <div className="App container">
          <header className="App-header">
            <h1>Raffaele's online grocery</h1>
            <div></div>
          </header>
          {this.state.isPending ? <Loading /> :
            this.state.isError ? <ReloadDataPanel reloadFn={this.reloadData} /> :
            <GroceryPage storeData={this.state.storeData} />
          }
        </div>
      </Grid>
    );
  }
}

export default App;
