import { FaTrashAlt, FaRecycle, FaLeaf } from "react-icons/fa";

export default function ResultIcon({ icon }) {
  switch (icon) {
    case "garbage":
      return <FaTrashAlt />;
    case "recycling":
      return <FaRecycle />;
    case "organic":
      return <FaLeaf />;
    default:
      return null;
  }
}
