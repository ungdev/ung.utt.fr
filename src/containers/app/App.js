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
import IncomingEvents from '../event/IncomingEvents'
import Barcamps from '../event/Barcamps'
import ContactModal from '../../components/contactModal/form'

const { Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobile : window.innerWidth < 1000
    }
  }

  handleResize = () => {
    if (window.innerWidth < 1000) {
      this.setState({mobile:true})
    }
    else {
      this.setState({mobile:false})
    }
  }

  componentDidMount() {
    window.addEventListener(
      "resize",
      this.handleResize
    )
  }

  showModal = () => {
    this.setState({ modalVisible: true });
  }

  handleCancel = () => {
    this.setState({ modalVisible: false});
  }

  render() {
    return (
      <Layout>
        <Router>
          <NavbarDiv showModal = {this.showModal}/> 
          <ContactModal visible = {this.state.modalVisible} handleCancel = {this.handleCancel}/>
          <Content className='white' style={{minHeight:'900px', marginTop : this.state.mobile ? '64px' : '0px'}}>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/who' exact component={Who} />
              <Route path='/tech/sia' exact component={Sia} />
              <Route path='/tech/etu' exact component={Etu} />
              <Route path='/tech/dev' exact component={Projects} />
              <Route path='/event/gameutt' exact component={Gameutt} />
              <Route path='/event/barcamp' exact component={Barcamps} />
              <Route path='/comingsoon' exact component={IncomingEvents} />
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
