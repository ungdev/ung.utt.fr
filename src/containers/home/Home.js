import React, { Component } from 'react'
import {Card} from 'antd'
import './Home.css'
import {Button} from 'antd'
import {Link} from 'react-router-dom'
import '../app/App.css'
import CardList from '../../components/card-list/CardList'
import projects from '../../components/card-list/projects'

class Home extends Component {
  render () {
    return (
      <div>
        <div className='home-card-start'>
          <h1 className='card-title'>Bienvenue sur le site de l'UNG !</h1>
          <h5 className='alinea text-content'>
            L'UTT Net Group est l'association d'informatique de l'UTT depuis 1998.
          </h5>
          <Button type="primary" size='large' className='home-card-button'><Link to='/who'>En savoir plus</Link></Button>
        </div>
        <div className='content'>
          <div className='flex cards'>
          <Card title="SIA" hoverable bordered={true} style={{margin : '10px 10px'}} cover={<img alt="example" src="https://via.placeholder.com/400x200" />}>
            <p>Le Système d'Information des Associations de l'UTT.</p>
            <Button><Link to='/tech/sia'>En savoir plus</Link></Button>
          </Card>
          <Card title="UTT Arena" hoverable bordered={true} style={{margin : '10px 10px'}} cover={<img alt="example" src="https://via.placeholder.com/400x200" />}>
            <p>Une LAN de 450 joueurs au Festival des Jeux de Troyes.</p>
            <Button><a href='https://arena.utt.fr'>En savoir plus</a></Button>
          </Card>
          <Card title="Site étudiant" hoverable bordered={true} style={{margin : '10px 10px'}} cover={<img alt="example" src="https://via.placeholder.com/400x200" />}>
            <p>Le site à destination de tous les étudiants de l'UTT.</p>
            <Button><Link to='/tech/etu'>En savoir plus</Link></Button>
          </Card>
          </div>
          <div className='list'>
            <h2 className='list-title'>Les applications et services UNG</h2>
            <CardList list={projects} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;