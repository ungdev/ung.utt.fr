import React, { Component } from 'react'
import '../app/App.css'
import { List } from 'antd'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'

const wholistdata = [
  {
    title: "SIA (Système d'Information des Associations)",
    icon: <Icon type="hdd" theme="filled" style={{fontSize: '30px'}}/>,
    linkto: '/tech/sia',
    description: "Le SIA a pour but d'héberger des sites web d'événements associatifs ou d'associations et de services utiles aux associations et à la vie étudiante. Il a son local dédié dans une salle serveur réservée, et est maintenu par les membres de l'association.",
  },
  {
    title: "UTT Arena",
    icon: <Icon type="trophy" theme="filled" style={{fontSize: '30px'}}/>,
    linkto: '/event/ua',
    description: "L'UTT Arena est un évènement annuel dédié au jeu vidéo. Sur trois jours, des joueurs de toute la France viennent s'affronter au cours de plusieurs tournois sur des jeux phares de l'e-sport. Il y a toujours besoin de monde pour l'organisation de cet évènement : préparation de crêpes, animation, commentaires, mise en place du réseau et des serveurs de jeu, et bien d'autres !",
  },
  {
    title: "Le site étudiant (etu.utt.fr)",
    icon: <Icon type="experiment" theme="filled" style={{fontSize: '30px'}}/>,
    linkto: '/tech/etu',
    description: "Un site réalisé par les étudiants, pour les étudiants. Il est rempli de fonctionnalités très utiles : calendrier des événements à venir, informations sur les associations, trombinoscope, guide des UEs, cumul d'emplois du temps... Ce site a été entièrement développé et est maintenu par des membres de l'UNG !"
  },
  {
    title: "De nombreux projets",
    icon: <Icon type="api" theme="filled" style={{fontSize: '30px'}} />,
    linkto: '/tech/dev',
    description: "Les membres UTT Net Group sont à la source d'une multitude de projets de développement web et d'applications pour des événements associatifs (UTT Arena, Gala, Intégration, Killer, Club Bières...)"
  }
]

class Who extends Component {
  render () {
    return (
      <div className='content-direct-start'>
        <div>
          <h1>C'est quoi l'UTT Net Group ?</h1>
          <p>
            L'UNG est l'association de l'UTT consacrée aux nouvelles technologies de l'information. Elle a été créée en 1998.
          </p>
          <h5>Pour qui ?</h5>
          <p>
            Faisons dès maintenant une croix sur les préjugés : pas besoin d'être un(e) barbu(e), un(e) fada d'informatique, avoir des compétences extraordinaires, ou tout simplement d'être catégorisé(e) en tant que geek pour pouvoir participer.
            Pourquoi ? Tout simplement car le champ d'action de l'UNG est si vaste que tu pourras forcément te retrouver dans une de nos nombreuses activités et t'y épanouir, tout en rendant un service non négligeable à la vie associative de ton école.
          </p>
          <h5>Besoin d'exemples ?</h5>
          <List
            itemLayout="horizontal"
            dataSource={wholistdata}
            renderItem={item => (
              <List.Item>
                {item.icon}
                <List.Item.Meta
                  title={<Link to={item.linkto} style={{color:'#1890ff'}}>{item.title}</Link>}
                  description={item.description}
                  style={{marginLeft:'15px'}}
                />
              </List.Item>
            )}
          />
          <h5>Et pourquoi pas ton projet ?</h5>
          <p>Tu penses avoir un projet qui peut être bénéfique à tous les étudiants et pour lequel nous pourrions t'aider ? N'hésite pas à nous en faire part ! Tu peux nous contacter en accédant à la page <Link to='/contact'>Contact</Link>.</p>
    
        </div>
      </div>
    )
  }
}

export default Who