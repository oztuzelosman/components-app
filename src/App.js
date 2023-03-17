//
import Button from "./Button";
//
import { GiClover } from "react-icons/gi";
//
function App() {
  return (
    <div>
      <Button primary rounded outline>
        <GiClover />
        Hide
      </Button>
      <Button secondary rounded outline>
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
