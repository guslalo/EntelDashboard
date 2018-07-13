export class Tabla {
  id:number;
  provider:string;
  modelo:string;
  equipoProtegido:boolean;
  entelBlue:boolean;
  planDestacado:string;
  cuotaPlanDestacado:string;
  precioVentaPlanDestacado:string;
  cuotaLiberado:string;
  precioVentaLiberado:string;
  accesorioDestacado:string;
  tipoPrecioAcessorios:string;
}

//catalogo general
export class Catalogo {
  id: number;
  name: string;
  image:string;
  created: Date;
  segment:number;
  version:number;
  modified:Date;
  equipments: Equipos[];
}


//equipo
export class Equipos{
 id:number;
 name:string;
 provider:provider;
 equipment_details:Equipment_details[];
 /*features:Features[];*/
}
export class provider{
  name:string;
 }

//quipment_details
export class Equipment_details{
  id: number;
  end: null;
  color: string;
  memory:number;
  created:Date;
  price_1: number;
  price_2:  number;
  //program: Programa[];
  adscreen:Adscreen[];
}

export class Adscreen {
  id:number;
  program:boolean;
  blue:boolean;
  plan:Plan[];
  equipment_plan:Equipment_plan[];
  accessory_details:Accessory_details[];
}

export class Accessory_details {
  accessory_name:string;
  type_price:type_price;
}
export class type_price {
  name:string;
}

export class Equipment_plan {
  price_1:string;
}

export class Plan{
  id: number;
  name:string;
  sale_price:string;
  customer_price:string;
  price_1:string;
  price_2:string;
  internal_id:string;
}

export class Sucursal{
  id: number;
  name:string;
  updated:number;
  outdated:number;
}

export interface Element {
  marca: any;
  modelo: string;
  version: string;
  especificaciones: string;
  protegido: boolean;
  blue: boolean;
  plandestacado: string;
  cuotaplandestacado: string;
  precioventaplandestacado: string;
  cuotaequipoliberado: any;
  precioventaliberado: any;
  accesoriodestacado: string;
  tipoprecio: string;
}

export class device {
  id: number;
  internal_id: number;
  name: string;
  connected: number;
  disconnected: number;
}


export class catalogue {
  current_version: number;
  last_version: number;
  remaining_versions: number;
  version:string;
}