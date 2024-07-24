
import Input from "../../components/Input/Input";
import RadioButton from "../../components/RadioButton/RadioButton";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";


export default function Home() {
  return (

      <div className="main-body center">
        <div>
          <Link to="/consign/general">
            <Button label="Sell"></Button>
          </Link>
          <Link to="/manage/dashboard">
            <Button label="Dashboard"></Button>
          </Link>
        </div>
      </div>

  );
}
