import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "./Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("Clicked!");
  };

  return (
    <div>
      <div>
        <Button secondary outline rounded onClick={handleClick}>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline rounded onMouseEnter={handleClick}>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning outline rounded onMouseLeave={handleClick}>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button success outline rounded>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary outline rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
