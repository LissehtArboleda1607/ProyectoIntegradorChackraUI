import React from "react";
import htmllogo from "../assets/Images/Html.png";
import Csslogo from "../assets/Images/CSS.png";
import Jslogo from "../assets/Images/JS.png";
import Reactlogo from "../assets/Images/React.png";
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Flex,
  Image,
  Stack,
} from "@chakra-ui/react";

export default function SobreNosotros() {
  return (
    <Flex fontSize="medium" alignItems={"center"} justifyContent={"center"}>
      <Card width="80%" padding="0vh 1.5vh 0vh 1.5vh">
        <CardHeader fontSize="5vh" color="#C95D40" fontWeight="bold">
          About us
        </CardHeader>
        <CardBody>
          <Text>
            Esta aplicación de lista de tareas fue desarrollada por Lisseht
            Arboleda, PRO de ADA School.
          </Text>
          <Text>
           ¿Qué es mi producto y para qué sirve?

Mi producto es una aplicación para hacer Listas de Tareas en React. Esta es una herramienta diseñada para ayudar a organizar y gestionar las tareas diarias de forma eficiente. Con la cual es posible tener una lista virtual en la que puedes anotar todas las cosas que necesitas hacer, ya sea en el trabajo, en la casa o en cualquier otro lugar. Esta lista permite llevar un registro de las tareas pendientes y ayuda a priorizarlas.

¿Cuáles son las funcionalidades más importantes y por qué los usuarios las usarían?

*Se pueden agregar más tareas: Permite agregar nuevas tareas más rápido y simple. Esto es útil porque permite tomar rápidamente las cosas que necesitas recordar sin perder tiempo en la búsqueda de papel y esfero.

*Se pueden editar y eliminar las tareas: Puede editar y eliminar tareas según sus necesidades. Esto es beneficioso porque la vida está llena de cambios, y tu lista de tareas debe adaptarse a ellos.

*Puede marcar tareas completadas: Cuando finalice una tarea, puede marcarla como completada. Esto te proporciona una sensación de logro y ayuda a mantener un registro de lo que ya se ha realizado.

*Prioriza tarea: Puede asignar prioridades a las tareas, y permite centrarte en lo más importante primero. Esto es esencial para ser más productivo y eficiente.

*Filtrar y buscar tareas: Tiene la capacidad de filtrar y buscar tareas, puede encontrar rápidamente lo que necesita, incluso en una lista larga. Esto ahorra tiempo y evita que sienta abrumado por una lista desorganizada.

*Tiene acceso en cualquier ubicación: Puedes acceder a la Lista de Tarea en React desde cualquier dispositivo con conexión a Internet. Esto significa que puede consultar y actualizar la lista en casa, en el trabajo o mientras estás de viaje.

*Interfaz Amigable: La aplicación tiene una interfaz sencilla y fácil de usar, incluso si no se es un experto en tecnología. Asegura que cualquiera pueda comenzar a usarla de inmediato. *Recordatorios Personalizables: Es posible configurar recordatorios para las tareas importantes. Esto garantiza que nunca se olviden las cosas que son cruciales para ti.
          </Text>
          <Stack direction="row" justifyContent="space-around" padding="5vh">
            <Text fontWeight="black">Tecnologías usadas en el aplicativo:</Text>
            <Image boxSize="10vh" src={htmllogo} />
            <Image boxSize="10vh" src={Csslogo} />
            <Image boxSize="10vh" src={Jslogo} />
            <Image boxSize="10vh" src={Reactlogo} />
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  );
}