import { useParams, Link } from "react-router-dom";
import { places } from "./Beaches";

export default function Beachplaces(props) {
  const params = useParams();
  const place = places.find((item) => item.id == params.id);
  console.log("PARAMs", params);
  return (
    <div>
      <h1>place description</h1>
      <h3>{place.title}</h3>
      <p>{place.description}</p>
      <img alt={place.title} src={place.image} width={600} />

      <h1> Stays </h1>
      <h2> We have a huge collection of stays all over india .</h2>

      <Link to={"/hotels"}>
        <h3>
          <button>click to see stay options</button>
        </h3>
      </Link>
    </div>
  );
}
