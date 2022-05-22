const Answer = ({ answer, correctLetters, index}) => {

      return(
        <div className="word">
            {answer.split('').map((letter, index)  => {
                return(
                    <span className="letter" key = {index}> {correctLetters.includes(letter) ? letter : " "}
                    </span>
                    )
                })}
        </div>
      )

            }

export default Answer
