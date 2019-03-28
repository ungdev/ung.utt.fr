
import React from 'react'
import {Collapse} from 'antd'
import './CardList.css'

const CardList = props => {
  return (
    <Collapse accordion>
      {
        props.list.map(
          listItem => (
            <Collapse.Panel header={listItem.title} key={listItem.id}>
              <p>{listItem.description}</p>
              <div className ='panel-more-info'>
                <p><strong>Technos utilisées : </strong>{listItem.tech}</p>
                <p><strong>Responsable(s) : </strong>{listItem.referents}</p>
              </div>
            </Collapse.Panel>
          )
        )
      }
    </Collapse>
  )
}

export default CardList