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
      <Button
        secondary
        rounded
        outline
        className="mt-5"
        onMouseEnter={handleClick}
      >
        <GiClover />
        Buy
      </Button>
      <Button success rounded outline className="mb-5">
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
