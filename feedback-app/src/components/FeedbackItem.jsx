import React from 'react'
import {FaTimes} from 'react-icons/fa'
import { useContext } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'

function FeedbackItem({item}) {
      return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick= {() => handleDelete(item.id)} className="close">
          <FaTimes className="color" />
        </button>
        <div className="text-display">{item.text}</div>
       
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem