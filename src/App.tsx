import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);

  const list: string[] = ["Pancho", "Nambre", "Meryjein"];

  const handleSelect = (elemento: string) => {
    console.log("Imprimiendo ", elemento)
  };

  return (
    <Card>
      <CardBody title="Hola Mundo" text="Este es el texto"/>
      {list.length !== 0 && <List data={list} onSelect={handleSelect} />}
      <Button 
        isLoading = {isLoading} 
        onClick = {handleClick}
      >
        Boton
      </Button>
    </Card>
  );
}

export default App;