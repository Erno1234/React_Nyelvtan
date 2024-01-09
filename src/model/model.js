import { szenvedoMondatok } from "./angol";
class Model {
  #cim;
  #list = [];
  #aktObj = {};
  constructor() {
    this.#cim = szenvedoMondatok[0];
    this.#list = szenvedoMondatok;
    
  }

  kever(valaszok) {
    let ctr = valaszok.length-1;
    let temp;
    let index = 0;

    while (0 < ctr) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = valaszok[ctr];
      valaszok[ctr] = valaszok[index];
      valaszok[index] = temp;
    }
    console.log(valaszok)
    return [...valaszok];
  }

  aktObject(index) {  
    const obj = this.#list[index];
    let kv = this.kever([...obj.valasztas]);
    this.#aktObj = {
      magyar: obj.magyar,
      mondat: obj.mondat,
      alap: obj.alap,
      helyes: obj.valasztas[0],
      kevertValasztas: kv,
    };
    console.log(this.#aktObj)
    return this.#aktObj;
  }
  getcim() {
    return this.#cim;
  }
}
export default Model;
