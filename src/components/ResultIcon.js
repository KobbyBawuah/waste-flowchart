import { FaTrashAlt, FaRecycle, FaApple } from "react-icons/fa";

export default function ResultIcon({ icon }) {
  switch (icon) {
    case "garbage":
      return <FaTrashAlt />;
    case "recycling":
      return <FaRecycle />;
    case "organic":
      return <FaApple />;
    default:
      return null;
  }
}
