# curso-angular-17

Inicializar proyectos en angular

```bash
ng new <nombre-app>

ng serve
```
En el app.component > tenemos la logica de la app general.

# Modelo de reactividad con signals
Reactividad granular, solo se actualiza lo que cambia.
Solo se actualiza determinado elemento de la vista, y no todo el arbol.
Para usar este modelo debemos declara variables en nuestro component con 
```typescript
import { Signal } from 'signals';
const myName = signal('Juan');
console.log(myName());
```
la ventaja de los signals es que avisamos a angular que se actualice solo el elemento que cambia, y no todo el arbol.
