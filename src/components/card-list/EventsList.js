import React from 'react'
import moment from 'moment'

const EventsList = props => {
  return (
    <div>
      {
        props.list.map(
          listItem => (
            <div className='event-card'>
              <h4>{`[${moment(listItem.begin.date).format('D MMMM YYYY - HH:mm')}] ${listItem.title}`}</h4>
              <div dangerouslySetInnerHTML={{__html: listItem.description}}/>
            </div>
          )
        )
      }
    </div>
  )
}

export default EventsList