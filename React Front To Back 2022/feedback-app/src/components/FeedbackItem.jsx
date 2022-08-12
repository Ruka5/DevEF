import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({item}) {
const {deleteFeedback,editFeedback} = useContext( FeedbackContext)

return (
    <Card reverse={false}>
        <div className="num-display">{item.rating}</div>
        <button onClick={()=>deleteFeedback(item.id)} className="close">
          <FaTimes color='purple'/>
        </button>
        <button onClick={()=>editFeedback(item)} className="edit">
          <FaEdit color='purple'/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

// import {useState} from 'react'

// function FeedbackItem(item) {
//   const [rating, setRating] = useState(7)
//   const [text, setText] = useState('This is an example of a feedback item')

// // const handleClick = () => {
// //   setRating((prev) => {
// //     console.log(prev);
// //     return prev+1;
// //   })
// // }

//   return (
//     <div className="card">
//         <div className="num-display">{rating}</div>
//         <div className="tex-sisplay">{text}</div>
//         {/* <button onClick={handleClick}>Click</button> */}
//     </div>
//   )
// }

export default FeedbackItem
