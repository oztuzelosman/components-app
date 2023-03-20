//
import Button from "./Button";
//
import { GiClover } from "react-icons/gi";
//
function App() {
  return (
    <div>
      <Button primary rounded>
        <GiClover />
        Hide
      </Button>
      <Button secondary rounded>
        <GiClover />
        Buy
      </Button>
      <Button success rounded>
        <GiClover />
        Cancel
      </Button>
      <Button warning rounded>
        <GiClover />
        Skip
      </Button>
      <Button danger rounded>
        <GiClover />
        Add to Cart
      </Button>
    </div>
  );
}
export default App;
