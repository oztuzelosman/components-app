//
import Button from "./Button";
//
import { GiClover } from "react-icons/gi";
//
const handleClick = () => {
  console.log("clicked");
};
//
function ButtonPage() {
  return (
    <div>
      <Button primary outline rounded onClick={handleClick}>
        <GiClover />
        Hide
      </Button>
      <Button secondary rounded className="mt-5" onMouseEnter={handleClick}>
        <GiClover />
        Buy
      </Button>
      <Button success rounded className="mb-5">
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
export default ButtonPage;
