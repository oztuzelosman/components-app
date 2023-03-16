//
import Button from "./Button";
//
import { GiClover } from "react-icons/gi";
//
function App() {
  return (
    <div>
      <Button primary>
        <GiClover />
        Hide
      </Button>
      <Button secondary>
        <GiClover />
        Buy
      </Button>
      <Button succes>
        <GiClover />
        Cancel
      </Button>
      <Button warning>
        <GiClover />
        Skip
      </Button>
      <Button danger>
        <GiClover />
        Add to Cart
      </Button>
    </div>
  );
}
export default App;
