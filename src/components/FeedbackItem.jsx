import { useState } from "react"

function FeedbackItem() {
  const [rating, setRating] = useState(1)
  const [text, setText] = useState('Example of feedback item.')

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </div>
  )
}

export default FeedbackItem
