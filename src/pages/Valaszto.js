import Model from "../model/model"
import MondatSelect from "../views/MondatSelect";
export default function Valaszto() {
    const MODEL = new Model();
    const obj = MODEL.aktObject(2);
    const cim = MODEL.getcim()
    return (
        <div>
            <h2>{cim}</h2>
            <p><MondatSelect/></p>
        </div>
    )
};