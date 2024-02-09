import classes from "./CartButton.module.css";
import { uiaction } from "../../store/ui-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalqty = useSelector((state) => state.cart.totalQuantity);

  const togglehandler = () => {
    dispatch(uiaction.toggle());
  };
  return (
    <button className={classes.button} onClick={togglehandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalqty}</span>
    </button>
  );
};

export default CartButton;
