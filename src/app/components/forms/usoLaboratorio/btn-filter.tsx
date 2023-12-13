// import {
//     Button,
//     Modal,
//     ModalBody,
//     ModalContent,
//     ModalFooter,
//     ModalHeader,
//   } from "@nextui-org/react";
//   import { useState } from "react";
//   import { setterData } from "@/app/interfaces/setter-interfaces";
//   import FieldsUsoLab from "../../../(setup)/laboratory-use/usoLaboratorio/fields-UsoLab";
//   import { UsoLab } from "@/app/interfaces/usoLab-interfaces";


  
//   interface BtnFilterUsoLabProps {
//     onFilteredLabUse: (fields: UsoLab) => void;
//   }
  
//   const BtnFilterUsoLab = ({ onFilteredLabUse }: BtnFilterUsoLabProps) => {
//     const [fields, setFields] = useState<UsoLab>({} as UsoLab);
//     const [isOpen, setOpen] = useState(false);
//     const onOpen = () => setOpen(true);
//     const onOpenChange = (open: boolean) => {
//       setOpen(open);
//     };
  
//     const setChangeFields = (value: setterData) => {
//       setFields({ ...fields, [value.clave]: value.valor });
//     };
  
//     const onFilteredUsoLab = () => {
//         console.log(fields)
//       onFilteredLabUse(fields);
//     };
  
//     return (
//       <>
//         <Button onPress={onOpen}>Buscar Registro del laboratorio</Button>
//         <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top">
//           <ModalContent>
//             {(onClose) => (
//               <>
//                 <ModalHeader className="flex flex-col gap-1">
//                   Registros del uso del laboratorio
//                 </ModalHeader>
//                 <ModalBody>
//                   <div>
//                     <FieldsUsoLab usoLaboratorio={fields} onChangeUsoLab={setChangeFields} />
//                   </div>
//                 </ModalBody>
//                 <ModalFooter>
//                   <Button
//                     color="danger"
//                     variant="light"
//                     onPress={() => {
//                       setTimeout(() => {
//                         onClose();
//                       }, 200);
  
//                       setFields(() => {
//                         onFilteredLabUse({} as UsoLab);
//                         return {} as UsoLab;
//                       });
//                     }}
//                   >
//                     Cancelar
//                   </Button>
//                   <Button
//                     color="success"
//                     onPress={() => {
//                       setTimeout(() => {
//                         onClose();
//                       }, 200);
//                       onFilteredUsoLab();
//                     }}
//                   >
//                     Filtrar
//                   </Button>
//                 </ModalFooter>
//               </>
//             )}
//           </ModalContent>
//         </Modal>
//       </>
//     );
//   };
  
//   export default BtnFilterUsoLab;
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useState } from "react";

import { setterData } from "@/app/interfaces/setter-interfaces";
import FieldsUsoLabModal from "./fields-UsoLabModal";
import { UsoLab } from "@/app/interfaces/usoLab-interfaces";

interface BtnFilterUsoLabsProps {
  onFilteredUsoLabs: (fields: UsoLab) => void;
}

const BtnFilterUsoLabs = ({ onFilteredUsoLabs }: BtnFilterUsoLabsProps) => {
  const [fields, setFields] = useState<UsoLab>({} as UsoLab);
  const [isOpen, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onOpenChange = (open: boolean) => {
    setOpen(open);
  };

  const setChangeFields = (value: setterData) => {
    setFields({ ...fields, [value.clave]: value.valor });
  };

  const onFilterUsoLabs = () => {
    console.log(fields)
    onFilteredUsoLabs(fields);
  };

  return (
    <>
      <Button onPress={onOpen}>Buscar UsoLabs</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <div>
                  <FieldsUsoLabModal usoLaboratorio={fields} onChangeUsoLab={setChangeFields} />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => {
                    setTimeout(() => {
                      onClose();
                    }, 200);

                    setFields(() => {
                      onFilteredUsoLabs({} as UsoLab);
                      return {} as UsoLab;
                    });
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  color="success"
                  onPress={() => {
                    setTimeout(() => {
                      onClose();
                    }, 200);
                    onFilterUsoLabs();
                  }}
                >
                  Filtrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default BtnFilterUsoLabs;
