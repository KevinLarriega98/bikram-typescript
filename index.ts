/** Tipos básicos y funciones */

// 1.
let nombre: string = "Kevin";
let edad: number = 28;
let activo: boolean = true;

console.log(`Nombre: ${nombre}, Edad: ${edad}, Activo: ${activo}`);

// nombre = 25;

// 2.
const precios: number[] = [12.5, 30, 8.99, 45];

function sumarPrecios(precios: number[]): number {
    return precios.reduce((total, precio) => total + precio, 0);
}

const total = sumarPrecios(precios);
console.log(`Total de precios: ${total}`);

// 3.
function presentar(nombre: string, apellido?: string): string {
    if (apellido) {
        return `Hola, ${nombre} ${apellido}`;
    }

    return `Hola, ${nombre}`;
}

console.log(presentar("Kevin"));
console.log(presentar("Kevin", "Larriega"));

// 4.
function calcularDescuento(precio: number, porcentaje: number): number {
    return precio - (precio * (porcentaje / 100));
}

console.log(`Precio con descuento: ${calcularDescuento(100, 20)}`);

// 5.
function mostrarId(id: number | string): void {
    if (typeof id === "number") {
        console.log(id.toFixed(2));
    } else if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
}

mostrarId(25);
mostrarId("usr-25");

/** Objetos, type e interface */

// 6.
type Producto = {
    nombre: string;
    precio: number;
    descripcion?: string;
}

const producto1: Producto = {
    nombre: "Camiseta",
    precio: 25.99,
    descripcion: "Camiseta de algodón"
};

const producto2: Producto = {
    nombre: "Pantalón",
    precio: 49.99
};

console.log(producto1);
console.log(producto2);

// 7.
function mostrarProducto(producto: Producto): string {
    return `${producto.nombre}: ${producto.precio} €`;
}

console.log(mostrarProducto(producto1));
console.log(mostrarProducto(producto2));

// 8.
type EstadoTarea = "pendiente" | "en-proceso" | "completada";

let estado: EstadoTarea = "pendiente";

// estado = "cancelada";

console.log(`Estado de la tarea: ${estado}`);

// 9.
interface Persona {
    nombre: string;
    edad: number;
    ciudad?: string;
}

const persona1: Persona = {
    nombre: "Kevin",
    edad: 28,
    ciudad: "Valencia"
};

const persona2: Persona = {
    nombre: "Lucía",
    edad: 24
};

function mostrarPersona(persona: Persona): void {
    if (persona.ciudad) {
        console.log(`${persona.nombre}, ${persona.edad} años, vive en ${persona.ciudad}`);
    } else {
        console.log(`${persona.nombre}, ${persona.edad} años`);
    }
}

mostrarPersona(persona1);
mostrarPersona(persona2);

// 10.
interface Libro {
    titulo: string;
    autor: string;
    paginas: number;
    disponible: boolean;
}

const libros: Libro[] = [
    {
        titulo: "1984",
        autor: "George Orwell",
        paginas: 328,
        disponible: true
    },
    {
        titulo: "El Hobbit",
        autor: "J.R.R. Tolkien",
        paginas: 310,
        disponible: false
    },
    {
        titulo: "Dune",
        autor: "Frank Herbert",
        paginas: 688,
        disponible: true
    }
];

function estaDisponible(libro: Libro): boolean {
    return libro.disponible;
}

const librosDisponibles = libros.filter(estaDisponible);

librosDisponibles.forEach(libro => {
    console.log(libro.titulo);
})

/** Uniones, unknown y tipos utilitarios */

// 11.
function buscarUsuario(id: number) {
    if (id === 1) {
        return "Ana";
    } else {
        return undefined;
    }
}

const usuario = buscarUsuario(1);

if (usuario !== undefined) {
    console.log(usuario.toUpperCase());
}

// 12.
let dato: unknown = "Hola";

if (typeof dato === "string") {
    console.log(dato.toUpperCase());
}

dato = 28;

if (typeof dato !== "string") {
    console.log("El dato ya no es un texto");
}

// 13.
type Usuario = {
    id: number;
    nombre: string;
    email: string;
    edad: number;
}

const cambios: Partial<Usuario> = {
    email: "kevin@gmail.com"
};

const resumen: Pick<Usuario, "id" | "nombre"> = {
    id: 1,
    nombre: "Kevin"
}

console.log(cambios);
console.log(resumen);

// 14.
type UsuarioPublico = Omit<Usuario, "email">;

const usuarioPublico: UsuarioPublico = {
    id: 1,
    nombre: "Kevin",
    edad: 25
}

console.log(usuarioPublico);

// 15.
interface Configuracion {
    tema?: string;
    idioma?: string;
}

let configuracionCompleta: Required<Configuracion> = {
    tema: "Inteligencia artificial",
    idioma: "Español"
}

console.log(configuracionCompleta);

const usuarioSoloLectura: Readonly<Usuario> = {
    id: 1,
    nombre: "Kevin",
    email: "kevin@gmail.com",
    edad: 28
};

// usuarioSoloLectura.nombre = "Ana";

/** Clases, interfaces y enum */

// 16.
class CuentaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    ingresar(cantidad: number): void {
        if (cantidad > 0) {
            this.saldo += cantidad;
        }
    }

    consultarSaldo(): number {
        return this.saldo;
    }
}

const cuenta = new CuentaBancaria(100);
cuenta.ingresar(50);

console.log(cuenta.consultarSaldo());

// 17.
interface Reproducible {
    reproducir(): void;
}

class Cancion implements Reproducible {
    reproducir(): void {
        console.log("Esta es una canción");
    }
}

class Video implements Reproducible {
    reproducir(): void {
        console.log("Este es un vídeo");
    }
}

const elementos: Reproducible[] = [new Cancion(), new Video()];

elementos.forEach(elemento => elemento.reproducir());

// 18.
enum EstadoPedido {
    Pendiente,
    Enviado,
    Entregado
}

function mensajePedido(estado: EstadoPedido): string {
    switch (estado) {
        case EstadoPedido.Pendiente:
            return "El pedido está pendiente";
        case EstadoPedido.Enviado:
            return "El pedido ha sido enviado";
        case EstadoPedido.Entregado:
            return "El pedido ha sido entregado";
    }
}

console.log(mensajePedido(EstadoPedido.Pendiente));
console.log(mensajePedido(EstadoPedido.Enviado));
console.log(mensajePedido(EstadoPedido.Entregado));

/** Genéricos, promesas y tipos de objetos */

// 19.
function primero<T>(elementos: T[]): T | undefined {
    return elementos[0];
}

console.log(primero([10, 20, 30]));
console.log(primero(["Kevin", "André"]));
console.log(primero([]));

// 20.
type Puntuaciones = Record<string, number>;

const puntuaciones: Puntuaciones = {
    Kevin: 10,
    André: 9,
    Lucía: 8
};

async function obtenerMensaje(): Promise<string> {
    let mejorAlumno = "";
    let mejorPuntuacion = -Infinity;

    for (const [alumno, puntuacion] of Object.entries(puntuaciones)) {
        if (puntuacion > mejorPuntuacion) {
            mejorAlumno = alumno;
            mejorPuntuacion = puntuacion;
        }
    }

    return `La puntuación más alta es la de ${mejorAlumno}`;
}

obtenerMensaje().then(mensaje => {
    console.log(mensaje);
});