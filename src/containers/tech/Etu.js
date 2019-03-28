import React, { Component } from 'react'
import '../app/App.css'


class Etu extends Component {
  render () {
    return (
      <div className='content-direct-start'>
        <div>
          <h1>Le site étudiant : <a href='http://etu.utt.fr'>etu.utt.fr</a></h1>
          <p>
            Le site des étudiants pour les étudiants. Sur celui-ci vous pourrez trouver un grand nombre d’outils utiles au quotidien pour vous simplifier la vie.
          </p>
          <h5>Partage</h5>
          <p>
            Le site étu est un outil de partage pour les évènements et les associations, le calendrier des évènements vous permettra de savoir quoi faire chaque semaine, alors que la galerie photo vous remémorera les meilleurs moments. Et si vous avez envie de vous impliquer dans la vie associative, vous pourrez aussi y découvrir la liste des associations et clubs de l'UTT.
          </p>
          <h5>Au quotidien</h5>
          <p>
            Pour vous aider dans votre vie étudiante, voici ce qui est mis à votre disposition : le trombinoscope, guide des UEs participatif, ou encore un emploi du temps interactif qui peut vous aider à connaitre les autres étudiants de vos cours ou à organiser plus facilement des groupes de projets.
          </p>
          <h5>Information</h5>
          <p>
            Sur le site vous avez également des onglets avec des commentaires sur les UEs pour vous aider à faire votre choix, des annales d'examen pour vous aider à réussir, ou tout simplement, le wiki pour partager vos connaissances étudiantes dans tous les domaines.
          </p>
          <h5>Evolution</h5>
          <p>
            Un projet en constante évolution qui a besoin de vous, qu’ils s’agissent des rédacteurs pour le Wiki ou des développeurs pour le faire évoluer. Le site, développé sous PHP 7.1 et Symfony 3, dispose d'une liste de fonctionnalités à coder qui n'attend que vous, du simple champ de recherche à ajouter sur le site jusqu’à la création d'une application mobile complète.
          </p>
        </div>
      </div>
    )
  }
}

export default Etu