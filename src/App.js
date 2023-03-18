//
import Button from "./Button";
//
import { GiClover } from "react-icons/gi";
//
const handleClick = () => {
  console.log("clicked");
};
//
function App() {
  return (
    <div>
      <Button primary rounded outline onClick={handleClick}>
        <GiClover />
        Hide
      </Button>
      <Button secondary rounded outline onMouseEnter={handleClick}>
        <GiClover />
        Buy
      </Button>
      <Button success rounded outline>
        <GiClover />
        Cancel
      </Button>
      <Button warning rounded outline>
        <GiClover />
        Skip
      </Button>
      <Button danger rounded outline>
        <GiClover />
        Add to Cart
      </Button>
    </div>
  );
}
export default App;
