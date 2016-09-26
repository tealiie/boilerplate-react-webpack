import React from 'react'

export default React.createClass ({
  // propTypes: {
  //   image:React.propTypes.string.isRequired
  // },

  render () {
    return (
      <div>
        <img className="image" src={this.props.image} />
      </div>
    )
  }
})
