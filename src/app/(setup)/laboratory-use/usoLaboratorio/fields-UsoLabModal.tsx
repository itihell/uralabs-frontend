// import { setterData } from "@/app/interfaces/setter-interfaces";
// import { UsoLab } from "@/app/interfaces/usoLab-interfaces";
// import {  Switch } from "@nextui-org/react";
// import { useEffect, useState } from "react";
// import { getAllAsignaturas, getAllCarreras, getAllDocentes, getAllLaboratorio, getAllModalidades } from "../actions/post/save-labUse";

// interface FieldsUsoLabProps {
//   usoLaboratorio?: UsoLab;
//   onChangeUsoLab: (data: setterData) => void;
// }
// export default function FieldsUsoLabModal(
//   { usoLaboratorio, onChangeUsoLab }: FieldsUsoLabProps = {
//     usoLaboratorio: {} as UsoLab,
//     onChangeUsoLab: () => {},
//   }
// ) {
//   const [fields, setFields] = useState<UsoLab>({} as UsoLab);
//   const handleChangeUsoLab = ({ clave, valor }: setterData) => {
//     setFields({ ...fields, [clave]: valor });
//     onChangeUsoLab({ clave, valor });
//   };

//   useEffect(() => {
//     if (usoLaboratorio) {
//       setFields(usoLaboratorio || ({} as UsoLab));
//     }
//   }, [usoLaboratorio]);

//   const [asignaturas, setAsignaturas] = useState([]);


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const asignaturaData = await getAllAsignaturas();
//         setAsignaturas(asignaturaData);
        
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []); // Se ejecutará una vez al montar el componente

//   const handlerChange = (e: any) => {
//     const { data, value } = e.target;
    
//   //   setUsoLaboratorios({
//       // ...usoLaboratorio,
//       // [...data];
    
// }
//   return (
//     <div>
//       <div className="mb-6">
//             <div>
//               <label htmlFor="className" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Nombre de la Clase</label>
//             </div>
//             <select
//               id="className"
//               name="className"
//               onChange={handlerChange}
//               className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-900"
//             >
//               <option value="className" >
//                 Seleccionar Asignatura
//               </option>
//               {asignaturas.map((asignatura: any) => (
//                 <option  key={asignatura.id} value={asignatura.id}  >
//                   {asignatura.nombre}
//                 </option>
//               ))}
//             </select>
//           </div>
//       <div className="w-full flex flex-col gap-4 mt-2">
//         <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
//           <Switch
//             name="is_active"
//             defaultSelected={usoLaboratorio?.is_active}
//             onChange={(e) => {
//               const data: setterData = {
//                 clave: e.target.name,
//                 valor: e.target.checked,
//               };

//               handleChangeUsoLab(data);
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
