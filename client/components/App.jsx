import React from 'react'
import Cats from './Cats.jsx'

export default React.createClass({
  render() {
    return (
      <div className="animals">
        <h1>React development has begun!</h1>
        {/* <img src="http://s3.amazonaws.com/thmb.inkfrog.com/pix/Starbase/anmaab21294.jpg/450/1" /> */}
        <Cats image="http://s3.amazonaws.com/thmb.inkfrog.com/pix/Starbase/anmaab21294.jpg/450/1" />
      </div>
    )
  }
})
