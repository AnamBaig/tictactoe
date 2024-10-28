export default function Cell(props) {
    
    function styling() {
        if (props.value !== "") {
            return "cell-item"
        } else if (props.endGame === true) {
            return "cell-item"
        } else if (props.player === props.player1) {
            return "cell-item1" 
        } else if (props.player === props.player2) {
            return "cell-item2" 
    }}
    
    return (
        <div className={styling()} 
            onClick={props.handleClick}
            >{props.value}
            </div>
    )
};

//{props.player === props.player1 ? 
         //   "cell-item1" : "cell-item2"