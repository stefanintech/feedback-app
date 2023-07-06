import PropTypes from 'prop-types'

function Card({children, reverse}) {
  return (
    <div className={`card ${reverse && 'reverse'}`}>
      {children}
    </div>
  )
}

Card.defaultProps = {
    reverse: true,
}

Card.proptTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.boolean,
}

export default Card
