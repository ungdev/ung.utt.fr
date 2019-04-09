import React, { Component } from "react";
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/fr'
import EventsList from '../../components/card-list/EventsList'
import '../app/App.css'

const events = axios.create({baseURL : process.env.REACT_APP_ETU})
moment.locale('fr')

class IncomingEvents extends Component {
  constructor(props) {
    super(props)
    this.getUNGEvents()
    this.getGAMEUTTEvents()
    this.state = {
      ungeventslist: [],
      gameutteventslist: []
    }
  }

  getUNGEvents = async () => {
    try {
      const now = moment().format("YYYY-MM-DD HH:mm:ss")
      let res = await events.get(`events?organization=ung&after=${now}`)
      console.log('EVENTS :', res, now)
      this.setState({ungeventslist: res.data.events})
    } catch (error) {
      console.error(error)
    }
  }

  getGAMEUTTEvents = async () => {
    try {
      const now = moment().format("YYYY-MM-DD HH:mm:ss")
      let res = await events.get(`events?organization=gameutt&after=${now}`)
      console.log('EVENTS :', res, now)
      this.setState({gameutteventslist: res.data.events})
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <div className="content-direct-start">
        <div>
          <h1 style={{marginBottom: '40px'}}>Prochains événements</h1>
          <h3 style={{marginBottom: '30px'}}>UNG</h3>
          <EventsList list={this.state.ungeventslist} />
          <div style={{marginBottom:'30px'}} />
          <h3 style={{marginBottom: '30px'}}>Game UTT</h3>
          <EventsList list={this.state.gameutteventslist} />
        </div>
      </div>
    );
  }
}

export default IncomingEvents
