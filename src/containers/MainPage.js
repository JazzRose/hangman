import React,{useState, useEffect} from 'react'
import Modal from 'react-modal'
import Answer from '../components/Answer'
import HangMan from '../components/HangMan'
import IncorrectLetters from '../components/IncorrectLetters'
import Buttons from '../components/Buttons'
import GameOver from '../components/GameOver'

const MainPage = () => {

    const [answer, setAnswer] = useState("")
    const[start,setStart] = useState(false)
    const [isModalOpen,setIsModalOpen] = useState(true)
    const [correctLetters,setCorrectLetters] = useState ([])
    const [incorrectLetters,setIncorrectLetters] = useState([])
    const [isGameModalOpen, setIsGameModalOpen] = useState(false);

    // useEffect(() => {
    //     setAnswer();
    //   }, [handleButtonClick]);
    // const words = ['jazz','neil','holly','vicky']
    // let selectedWord = words[Math.floor(Math.random() * words.length)];

//     useEffect (() => {
//         const handleLetterPress= event => {
//                 const {key,keyCode} = event 
//                 if (keyCode >= 65 && keyCode <= 90) {
//             		const letter = key.toLowerCase();
        
                    
//                 if (answer.includes(letter)) {
//                     if (!correctLetters.includes(letter)) {
//                     		setCorrectLetters(currentLetters => [...currentLetters, letter])
//                     }else{
//                     		// showNotification();
//                     	}

//                     }else {
//                     if (!incorrectLetters.includes(letter)) {
//                     		setIncorrectLetters(currentIncorrectLetters => [...currentIncorrectLetters, letter])
//                          }else{
//                                 //notification
//                             }
//                         }
//                     }
//                 }
//     window.addEventListener('keydown',handleLetterPress);
//     return() => window.removeEventListener('keydown',handleLetterPress)
    
// }, [start,correctLetters,incorrectLetters])

    const handleButtonClick= event =>{
        const chosenLetter = event.target.value

        if (answer.includes(chosenLetter)) {
            if (!correctLetters.includes(chosenLetter)) {
                setCorrectLetters(currentLetters => [...currentLetters, chosenLetter])
                }else{
                // showNotification();
                }

            }else {
                if (!incorrectLetters.includes(chosenLetter)) {
                setIncorrectLetters(currentIncorrectLetters => [...currentIncorrectLetters, chosenLetter])
                    }else{
                    //notification
                }
            }
        // let splitAnswers = answer.split('')
        // let unique = [...new Set(splitAnswers)]
        
        if (incorrectLetters.length > 4){
            setIsGameModalOpen(!isGameModalOpen)}

        // if (unique.sort() === correctLetters.sort())
        //      setIsGameModalOpen(!isGameModalOpen)

        //      console.log(correctLetters.sort())
        //      console.log(unique.sort())
            
        
    }   

    const letters = ["A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z"];


    const handleAnswerChange = (evt) => {
        setAnswer(evt.target.value);
      };

      const startGame = () => {
        setIsModalOpen(!isModalOpen)
        setStart(true);
      };

      const restartGame = () => {
        setIsModalOpen(true)
        setStart(true)
        // setAnswer([])
        setIsGameModalOpen(false)
        setCorrectLetters([])
        setIncorrectLetters([])

      }


    return(
        <>
    <h1>Hangman</h1>
    <div className = "main_div">
    <Modal
        // className="game_modal"
        isOpen={isModalOpen}
        ariaHideApp={false}
        contentLabel='Answer Input'
      >
        <label htmlFor='name'>Your answer: </label>
        <input
          type='password'
          min = '1'
          name='answer'
          placeholder='Type Word Here'
          onChange={handleAnswerChange}
        />
        <br></br>
        <button onClick={startGame}>Let's Go!</button>
      </Modal>
      <div className = 'game-container'>
      <HangMan incorrectLetters={incorrectLetters}/>
      <IncorrectLetters incorrectLetters={incorrectLetters}/>
      <Answer answer = {answer} correctLetters= {correctLetters}/>
      {/* <Buttons onButtonClick={onButtonClick}/> */}
      </div>
      <div className='keyboard'>
      {letters
            .map((letter) => 
            <button onClick = {handleButtonClick} value = {letter.toLowerCase()} key={letter}>{letter}</button>)
            }
        </div>
        <GameOver restartGame = {restartGame} answer = {answer} isGameModalOpen={isGameModalOpen}/>
      </div>
      </>
    )
}
                


export default MainPage