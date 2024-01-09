import { szenvedoMondatok } from "../model/angol";
export default function MondatSelect(props) {
  const mondtaLista = props.szenvedoMondatok.mondat.split("");
  return (
    <p>
      <b>{props.mondtaLista.index - 1}</b>
      {mondtaLista}
    </p>
  );
}
