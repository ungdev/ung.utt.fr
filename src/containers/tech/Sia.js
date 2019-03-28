import React, { Component } from 'react'
import '../app/App.css'
import {List} from 'antd'

const data = [
  {
    title: 'Création de machines virtuelles et de conteneurs pour héberger des systèmes'
  },
  {
    title: "Gestion des accès d'authentification centralisée"
  },
  {
    title: "Réalisation et vérification des systèmes de reprise après incident (sauvegarde, basculement de charge, garde-fous...)"
  },
  {
    title: "Gestion des applications Web en PaaS"
  },
  {
    title: "Gestion des journaux"
  },
  {
    title: "Gestion du parc matériel & inventaire"
  },
  {
    title: "Gestion du stockage cloud"
  },
  {
    title: "Gestion du datacenter Lab"
  },
  {
    title: "Gestion des annales sur le site étu"
  },
  {
    title: "Gestion de tickets d’incident"
  },
  {
    title: "... et bien d'autres !"
  }
]

class Sia extends Component {
  render () {
    return (
      <div className='content-direct-start'>
        <div>
          <h1>SIA : Système d'Information des Associations</h1>
          <p>
            Le Système Information des Associations (SIA) est un projet complexe, qui a fortement évolué récemment. Il est aujourd’hui composé de multiples sous-systèmes plus ou moins fortement intriqués entre eux, fonctionnant de concert afin d’aboutir au résultat que l’on connaît aujourd’hui.
          </p>
          <h5>Administration</h5>
          <p>
            L'UNG gère une infrastructure de virtualisation (VMWare vSphere et Proxmox VE) sur laquelle elle héberge non seulement les divers services nécessaires à son fonctionnement (authentification centralisée, résolution de noms, journalisation, etc.), mais aussi et surtout tous les systèmes informatiques des associations de l'UTT : sites-vitrines, applications de gestion, stockage cloud...
          </p>
          <h5>Réseau</h5>
          <p>
            L'UNG maintient son propre réseau, afin de supporter des services. Celui-ci est disponible dans le bâtiment associatif, et est propagé à travers l'UTT quand les circonstances l'exigent (e.g. Gala, soirée jeux, permanences de vente...).
          </p>
          <h5>Développement</h5>
          <p>
            Afin de correspondre au mieux à nos besoins, une grande partie de nos outils logiciels sont conçus ad-hoc par des étudiants : site étudiant, gestion logistique, organisation du Gala... Ceux-ci se chargent aussi d'adapter des outils existants. Au menu : PHP (frameworks Symfony & Laravel), Python, JS et NodeJS sont de la partie.
          </p>
          <h5>Mais sur le papier, on fait quoi ?</h5>
          <p>
            Rien n'est figé dans un Système d’Information : ce qui fonctionne doit être maintenu, ce qui ne fonctionne plus doit être remis en état, ce qui manque doit être ajouté. Au quotidien : surveillance du matériel, gestion des mises à jour, monitoring des services. Sur incident : remise en service de ce qui peut l'être, reconstruction du reste à partir des éléments disponibles. Et pour l'avenir : évaluations de solutions pour répondre à un besoin, mise en place des éléments techniques, configuration et customisation...
          </p>
          <h5>Et concrètement ?</h5>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={<p>{item.title}</p>}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    )
  }
}

export default Sia