Ejercicio 1
Crear una aplicación de React con create-react-app
Limpiar el proyecto para iniciar sin código innecesario.
El componente App deberá tener creado un css particular que contendrá selectore generales a toda la app. (Ej: App.css)
Los componentes creados deberán tener un css particular que defina sus selectores particulares.
Crear los componentes Header, Nav, Main, Aside y Footer.
Definir un color a elección para cada uno de los componente anteriores.
Crear un componente Layout que integre cada uno de los componentes anteriores y los posiciones como se muestra en la imagen.
(http://jasmdp.ferozo.com/ada/template-html.png)

Ejercicio 2
Haciendo uso de la app del ejercicio anterior:

Crear un componente News dentro de Main (recordar que los componentes que pertenecen a otros componentes, van dentro de una carpeta "components").
Crear un componente Article dentro de News. El artículo contiene:
Title
Date
Author
Text
Comments
Crear un componente Services dentro de Main que por el momento contenga un texto.
Crear un componente Contact dentro de Main. El formulario de contacto debe pedir:
Name and lastname
Email
subject
Message
Ejercicio 3
Haciendo uso de la app del ejercicio anterior, vamos a realizar los siguientes cambios.

Layout tendrá una carpeta components.
Todos los componentes anteriores menos Main, deben ser movidos a la carpeta creada en el inciso anerior.
Ahora Main y Layout comparten espacio en components.
Crear una carpeta screens