import React, { Component } from "react";
import "../app/App.css";
import {
  projects,
  projectsDoing,
  projectsToDo,
  projectsIdeas
} from "../../components/card-list/projects";
import CardList from '../../components/card-list/CardList'

class Projects extends Component {
  render() {
    return (
      <div className="content-direct-start">
        <div className="list">
          <h2 className="list-title">Les applications et services UNG</h2>
          <CardList list={projects} />
        </div>
        <div className="list">
          <h2 className="list-title">Les projets en cours de réalisation</h2>
          <CardList list={projectsDoing} />
        </div>
        <div className="list">
          <h2 className="list-title">Les projets à démarrer</h2>
          <CardList list={projectsToDo} />
        </div>
        <div className="list">
          <h2 className="list-title">Les idées de projets</h2>
          <CardList list={projectsIdeas} />
        </div>
      </div>
    );
  }
}

export default Projects
