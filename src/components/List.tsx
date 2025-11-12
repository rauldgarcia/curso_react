import { MouseEvent } from "react";

type Props = {
    data: string[];
}

function List({ data }: Props) {
    const handleClick = (event: string) => {
        console.log(event);
    }
  return (
    <ul className="list-group">
        {data.map((elemento) => (
        <li 
            onClick={() => handleClick(elemento)} 
            key={elemento} 
            className="list-group-item"
        >
            {elemento}
        </li>
        ))}
        
    </ul>
  )
}

export default List