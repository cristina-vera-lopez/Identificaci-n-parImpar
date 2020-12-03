// Identificación

/* --> Crear una funcion que reciba dos parametros: 'user' y 'password'. 
Usando SWITCH mostrar en consola los siguientes mensajes, según corresponda:
1.- "Bienvenido a nuestro sitio!", (si el usuario es "admin" y la contraseña es 1234)
2.- Contraseña incorrecta
3.- Usuario incorrecto
4.- Usuario y Contraseña incorrectos
5.- Debe ingresar los datos requeridos */

function identificacion(usuario, contraseña){ //recomendable: evitar palabras con Ñ, Ejemplo password en vez de contraseña

    switch(true){ /*cuando queremos comparar varias cosas colocar 'true'*/
        
    case usuario=="" && contraseña=="":
        console.log("Debe ingresar los datos requeridos"); /*colocar esto antes de definir los casos para que JS lo tome 
        como primero, ya que ejecuta un paso a la vez de arriba a abajo*/
        break;
    
    case usuario == 'admin' && contraseña != 1234:
        console.log('Contraseña incorrecta')
        break;
    
    case usuario != 'admin' && contraseña == 1234:
        console.log('Usuario incorrecto')
        break;

    case usuario != 'admin' && contraseña != 1234:
        console.log('Usuario y Contraseña incorrectos')
        break;

     default:
        case usuario == 'admin' && contraseña == 1234:
        console.log('¡Bienvenido a nuestro sitio!')
        break;

    }

}

  identificacion('admin', 1234);
  identificacion('admin', 4321);
  identificacion('rocio', 1234);
  identificacion('rocio', 4321);
  identificacion("","")
 
