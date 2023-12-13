import { getAllAsignaturas, getAllLaboratorio, getAllDocentes, getAllModalidades, getAllCarreras, getAllTurnos } from "@/app/(setup)/laboratory-use/actions/post/save-labUse";
import { setterData } from "@/app/interfaces/setter-interfaces";
import { UsoLab } from "@/app/interfaces/usoLab-interfaces";
import { Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";

interface FieldsUsoLabProps {
  usoLaboratorio?: UsoLab;
  onChangeUsoLab: (data: setterData) => void;
}

export default function FieldsUsoLabModal(
  { usoLaboratorio, onChangeUsoLab }: FieldsUsoLabProps = {
    usoLaboratorio: {} as UsoLab,
    onChangeUsoLab: () => { }
  }
) {
  const [fields, setFields] = useState<UsoLab>({} as UsoLab);
  const handleChangeUsoLab = ({ clave, valor }: setterData) => {
    setFields({ ...fields, [clave]: valor });
    onChangeUsoLab({ clave, valor });
  };
  

 
  const [docentes, setDocentes] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docentesData = await getAllDocentes();
        setDocentes(docentesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Se ejecutará una vez al montar el componente

  const handlerChange = (e: any) => {
    const { data, value } = e.target;
    handleChangeUsoLab(data);

  }
  useEffect(() => {
    if (usoLaboratorio) {
      setFields(usoLaboratorio || ({} as UsoLab));
    }
  }, [usoLaboratorio]);
  return (
    <div>
      <div className="mb-6">
        <div>
          <label htmlFor="teacher" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">Docente</label>
        </div>
        <select
          name="docente"
          id="docente"
          onChange={(e) => {
            const data: setterData = {
              clave: e.target.name,
              valor: e.target.value,
            };
            handleChangeUsoLab(data);
          }}
          className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-900"
        >
          <option value="docente" >
            Seleccionar docente
          </option>
          {docentes.map((docente: any) => (
            <option key={docente.id} value={docente.id}  >
              {docente.nombre} {docente.apellido}
            </option>
          ))}
        </select>
      </div>

      
      <div className="w-full flex flex-col gap-4">
      </div>
      <div className="w-full flex flex-col gap-4 mt-2">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
          <Switch
            name="is_active"
            defaultSelected={usoLaboratorio?.is_active}
            onChange={(e) => {
              const data: setterData = {
                clave: e.target.name,
                valor: e.target.checked,
              };

              handleChangeUsoLab(data);
            }}
          />
        </div>
      </div>
    </div>
  );
}
