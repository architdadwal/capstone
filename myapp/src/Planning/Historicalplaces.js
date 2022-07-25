import { useParams } from "react-router-dom";
import { places } from "./historical";

export default function Historicalplaces(props) {
  const params = useParams();
  const place = places.find((item) => item.id == params.id);
  console.log("PARAMs", params);
  return (
    <div>
      <h1>place description</h1>
      <h3>{place.title}</h3>
      <p>{place.description}</p>
      <img alt={place.title} src={place.image} width={300} />

      <h1> Stays </h1>
    </div>
  );
}
