import Image from "next/image"
import { formatearDinero } from "../helpers"
import styles from "../styles/Producto.module.css"
import useQuiosco from "@/hooks/useQuiosco"

const Producto = ({producto}) => {

    const { handleSetProducto, handleChangeModal } = useQuiosco()

    const { nombre, precio, imagen } = producto

    return (
        <div className={styles.card}>
            <Image 
                src={`/assets/img/${imagen}.jpg`}
                width={400} 
                height={500} 
                alt={`Imagen Platillo ${nombre}`}
            />
            <div className="p-5">
                <div>
                    <h3 className="text-2xl font-bold">{nombre}</h3>
                </div>
                <p className="mt-5 font-black text-4xl text-amber-500">
                    {formatearDinero(precio)}
                </p>

                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
                    onClick={() => {
                        handleChangeModal()
                        handleSetProducto(producto)
                    }}
                >Agregar</button>
            </div>
        </div>
    )
}

export default Producto