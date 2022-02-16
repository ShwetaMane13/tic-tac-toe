import { Square } from "./Square"


export const Board = ({squares, onClick}) => (
     <div className="board">
        {
            squares.map((square, i) => (
                <Square key={i} value={square} onClick = {() => onClick(i)} />
            ))
        }
    </div>
);
