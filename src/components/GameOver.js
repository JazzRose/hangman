import React from 'react'
import Modal from 'react-modal/lib/components/Modal'

const GameOver = ({restartGame,isGameModalOpen, answer}) => {
 const handleButtonClick = () => {
    restartGame()
 }  
 return (
    <div>
      <Modal
        isOpen={isGameModalOpen}
        ariaHideApp={false}
        contentLabel='Answer Input'
      >
       <p>Unlucky! The answer was {answer}</p>
       <button onClick={handleButtonClick}>Play Again!</button>
       </Modal>
    </div>
  )
}

export default GameOver
