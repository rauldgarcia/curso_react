import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list: string[] = ["Pancho", "Nambre", "Meryjein"];

  const handleSelect = (elemento: string) => {
    console.log("Imprimiendo ", elemento)
  };

  return (
    <Card>
      <CardBody title="Hola Mundo" text="Este es el texto"/>
      {list.length !== 0 && <List data={list} onSelect={handleSelect} />}
    </Card>
  );
}

export default App;