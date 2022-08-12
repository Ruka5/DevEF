import PropTypes from 'prop-types'

function Card({children, reverse}) {
//   this is a conditional Class
//   return (
//     // <div className={`card ${reverse && 'reverse'}`}>{children}</div>
//   )

// or is dependet on You to use one of these
// this is conditional style
return ( 
<div 
    className="card" 
    style={{backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
    color: reverse ? '#fff' : '#000'}}>
    {children}
</div>)
}

Card.defaultProps = {reverse: false}
Card.protoTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card