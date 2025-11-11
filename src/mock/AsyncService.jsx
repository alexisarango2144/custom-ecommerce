import Swal from "sweetalert2";

export const products = [
    {
    "id": 1,
    "title": "Ozempic 1.34 mg/ml",
    "price": 349550,
    "description": "Antidiabético usado para tratar la diabetes tipo 2 y la obesidad. Es un análogo del péptido similar al glucagón tipo 1.",
    "category": ["medicamentos", "mas vendidos"],
    "image": "https://www.drogueriascafam.com.co/50619-large_default/comprar-en-cafam-ozempic-134-mg-ml-inyectable-caja-con-1-pluma-y-6-agujas-precio.jpg",
    "rating": { "rate": 4.4, "count": 120 },
    "stock": 6
  },
  {
    "id": 2,
    "title": "Acetaminofén MK 500mg 16 tabletas cubiertas",
    "price": 12750,
    "description": "Analgésico y antipirético indicado para aliviar el dolor y reducir la fiebre.",
    "category": ["medicamentos"],
    "image": "https://www.drogueriascafam.com.co/77258-large_default/acetaminofen-mk-500-mg-16-tabletas-cubiertas.jpg",
    "rating": { "rate": 4.8, "count": 240 },
    "stock": 50
  },
  {
    "id": 3,
    "title": "Omeprazol 20mg Mk 30 capsula dura",
    "price": 18900,
    "description": "Medicamento usado para el tratamiento de la acidez estomacal y úlceras gástricas.",
    "category": ["medicamentos", "mas vendidos"],
    "image": "https://www.drogueriascafam.com.co/73059-large_default/omeprazol-20mg-mk-30-capsula-dura.jpg",
    "rating": { "rate": 4.6, "count": 190 },
    "stock": 22
  },
  {
    "id": 4,
    "title": "Suerox Bebida Electrolitos Frutas Tropicales 500 ml",
    "price": 9900,
    "description": "Bebida con electrolitos para rehidratar el cuerpo durante o después del esfuerzo físico o enfermedad.",
    "category": ["suministros"],
    "image": "https://www.drogueriascafam.com.co/73196-large_default/bebida-hidratante-energetica-suerox-sabor-frutos-rojos-tropicales-630-ml.jpg",
    "rating": { "rate": 4.5, "count": 86 },
    "stock": 30
  },
  {
    "id": 5,
    "title": "Alcohol Antiséptico 70% 1000 ml",
    "price": 15200,
    "description": "Solución antiséptica para limpieza y desinfección de piel y superficies.",
    "category": ["suministros", "mas vendidos"],
    "image": "https://www.drogueriascafam.com.co/68630-large_default/comprar-en-cafam-alcohol-antiseptico-jgb-frasco-con-700-ml-precio.jpg",
    "rating": { "rate": 4.9, "count": 310 },
    "stock": 40
  },
  {
    "id": 6,
    "title": "Guantes de Látex Talla L caja x100",
    "price": 42300,
    "description": "Guantes desechables para procedimientos médicos. Alta sensibilidad táctil y resistencia.",
    "category": ["suministros"],
    "image": "https://www.drogueriascafam.com.co/63551-large_default/comprar-en-cafam-guantes-de-examen-latex-caja-con-100-unidades-precio.jpg",
    "rating": { "rate": 4.7, "count": 105 },
    "stock": 15
  },
  {
    "id": 7,
    "title": "Ibuprofeno 400 mg Tabletas x100",
    "price": 28950,
    "description": "Antiinflamatorio no esteroideo usado para aliviar el dolor leve o moderado y reducir la fiebre.",
    "category": ["medicamentos"],
    "image": "https://www.drogueriascafam.com.co/57063-large_default/comprar-en-cafam-ibuprofeno-mk-400-mg-caja-con-100-tabletas-cubiertas-precio.jpg",
    "rating": { "rate": 4.3, "count": 180 },
    "stock": 48
  },
  {
    "id": 8,
    "title": "Tapabocas Desechables x50 unidades",
    "price": 19800,
    "description": "Tapabocas de tres capas para protección respiratoria contra partículas y gotas.",
    "category": ["suministros", "mas vendidos"],
    "image": "https://www.drogueriascafam.com.co/52130-large_default/tapabocas-face-mask-caja-con-50-unidades.jpg",
    "rating": { "rate": 4.7, "count": 205 },
    "stock": 35
  },
  {
    "id": 9,
    "title": "Loratadina 10 mg Tabletas x10",
    "price": 11400,
    "description": "Antihistamínico utilizado para tratar alergias y rinitis estacional.",
    "category": ["medicamentos"],
    "image": "https://www.drogueriascafam.com.co/38181-large_default/comprar-en-cafam-loratadina-10-mg-caja-con-10-tabletas-precio.jpg",
    "rating": { "rate": 4.6, "count": 130 },
    "stock": 28
  },
  {
    "id": 10,
    "title": "Termómetro Digital Alfasafe caja con 1 unidad",
    "price": 27900,
    "description": "Termómetro electrónico con pantalla digital y lectura rápida para medir la temperatura corporal.",
    "category": ["suministros", "mas vendidos"],
    "image": "https://www.drogueriascafam.com.co/32691-large_default/comprar-en-cafam-termometro-digital-alfasafe-caja-con-1-unidad-precio.jpg",
    "rating": { "rate": 4.8, "count": 160 },
    "stock": 20
  }
]

export const getProducts = ()=>{
    let error = false;

    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                console.log("Se encontró un error");
                reject('Ups, algo salió mal')
            }else{
                console.log('Operación exitosa')
                resolve(products)
            }
        }, 300)
    })
}

export const getOneProduct = (id)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            let prod = products.find((producto)=> producto.id == id)
            resolve(prod)
        }, 300)
    })
}