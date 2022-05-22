import React from 'react'

const IncorrectLetters = ({incorrectLetters}) => {
  return (
    <div className="wrong-letters-container">
            {incorrectLetters.length > 0 ? <p>Nope! Try Again</p> : "" }
            {incorrectLetters.map ((letter,index)=> <span key = {index}>{letter}</span>)}
                <div id="wrong-letters"></div>
      </div>
  )
}

export default IncorrectLetters
