import React, { Component } from 'react'
import './App.css'
import NavbarDiv from '../../components/navbar/NavbarDiv'
import {Switch, Route, BrowserRouter as Router, Redirect} from 'react-router-dom'
import Home from '../home/Home'
import "antd/dist/antd.css"
import { Layout } from 'antd'
import Who from '../who/Who'
import Sia from '../tech/Sia'
import Etu from '../tech/Etu'
import Projects from '../tech/Projects'
import Gameutt from '../event/Gameutt'

const { Content, Footer } = Layout;


class App extends Component {
  render() {
    return (
      <Layout>
        <Router>
          <NavbarDiv /> 
          <Content className='white' style={{minHeight:'900px'}}>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/who' exact component={Who} />
              <Route path='/tech/sia' exact component={Sia} />
              <Route path='/tech/etu' exact component={Etu} />
              <Route path='/tech/dev' exact component={Projects} />
              <Route path='/event/gameutt' exact component={Gameutt} />
              <Redirect from='*' to ='/' />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            UTT Net Group ©2019 Created by Ridzu
          </Footer>
        </Router>
      </Layout>   
    );
  }
}

export default App;
