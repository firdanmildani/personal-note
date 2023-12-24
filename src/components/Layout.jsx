import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { getInitialData } from '../utils/index';
import InputArea from './InputArea';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: getInitialData(),
      search: '',
    }
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddDatasHandler = this.onAddDatasHandler.bind(this);
    this.onActiveHandler = this.onActiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }
  
  onAddDatasHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        datas: [
          ...prevState.datas,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toDateString(),
            archived: false,
          }
        ]
      }
    })
  }

  onDeleteHandler(id) {
    const datas = this.state.datas.filter(data => data.id !== id);
    this.setState({ datas });
  }
    
  onActiveHandler(id) {
    const updatedDatas = this.state.datas.map(data => {
        if (data.id === id) {
            data.archived = true;
        }
        return data;
    });

    this.setState({ datas: updatedDatas });
  }

  onArchiveHandler(id) {
      const updatedDatas = this.state.datas.map(data => {
          if (data.id === id) {
              data.archived = false;
          }
          return data;
      });

      this.setState({ datas: updatedDatas });
  }
  
  onSearchHandler(event) {
    const captureValue = event.target.value.toLowerCase();
    this.setState({ search: captureValue })
    event.preventDefault();
  }
  
  render() {
    const searchDatas = !this.state.search ? this.state.datas : this.state.datas.filter(data => data.title.toLowerCase().match(this.state.search));
    const activeDatas = searchDatas.filter(data => data.archived === false);
    const archiveDatas = searchDatas.filter(data => data.archived === true);

  return (
    <div className='layout'>
      <Navbar onSearch={this.onSearchHandler} />
      <div className="layout-body">
        <div className="container">
          <InputArea addDatas={this.onAddDatasHandler} />
        </div>
        <div className="container">
          <Home onDelete={this.onDeleteHandler} activeDatas={activeDatas} archiveDatas={archiveDatas} onActive={this.onActiveHandler} onArchive={this.onArchiveHandler} />
        </div>
      </div>
    </div>
  );
}
}

export default Layout;
