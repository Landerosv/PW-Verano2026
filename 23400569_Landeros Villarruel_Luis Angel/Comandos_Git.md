# Comandos Github 
Landeros Villarruel Luis Angel - 23400569

Programación WEB
### 1. git init
El comando git init crea un nuevo repositorio Git o reinicia uno existente.  

Cuando ejecutas el comando, tu directorio actual se convierte en 
un repositorio Git, lo que te permite seguir sus cambios. Añade una carpeta oculta .git en el directorio, 
donde Git almacena todos los metadatos, el historial de versiones y los registros relacionados con el proyecto.

Caso de uso: Se usa cuando se empieza un proyecto nuevo desde cero y se quiere rastrear cambios.
### 2. git clone
Copia un repositorio remoto existente (con todo su historial y versiones) a tu máquina local desde 
servidores remotos como GitHub.

Caso de uso: Se utilza cuando se quiere trabajar en un repositorio ya existente en Github.
### 3. git status
Muestra el estado actual del repositorio: archivos modificados, sin rastrear o listos para commit.

Caso de uso: Se utiliza para verificar el estado antes de hacer commits.
### 4. git add
Agrega cambios al área de preparación (staging area), indicando a Git qué incluir en el próximo commit.

Caso de uso: Cuando modificas varios archivos pero solo quieres confirmar uno.
### 5. git commit
Guarda una instantánea de los cambios preparados en el repositorio local con un mensaje descriptivo.

Caso de uso: Se utiliza para implementar algún cambio y quieres registrar ese avance.
### 6. git remote add
Crea una conexión entre tu repositorio local y uno remoto (como GitHub).

Caso de uso: Se utiliza para cuando creas un repositorio
local y se quiere vincular a GitHub por primera vez.
### 7. git push
Sube los commits locales al repositorio remoto.

Caso de uso: Se utiliza para compartir tus cambios con el equipo.
### 8. git pull
Descarga y fusiona los cambios del repositorio remoto en tu rama local (equivale a fetch + merge).

Caso de uso: Se utiliza para actualizar cambios a tu versión local
### 9. git fetch
 Descarga los cambios del repositorio remoto pero sin fusionarlos, permitiéndote revisarlos primero.

Caso de uso: Se utiliza para ver que cambios hay en el remoto antes de integrarlos.
### 10. git branch
Lista, crea o elimina ramas del repositorio.

Caso de uso: Se utiliza para desarrollar una nueva función sin tocar la rama principal.
### 11. git checkout
Cambia entre ramas o restaura archivos a un estado anterior (método clásico).

Caso de uso: Se utiliza para Cambiar a una rama existente para revisar código.
### 12. git switch
Versión moderna de git checkout para cambiar de rama

Caso de uso: Se utiliza para cambiar a otra rama de forma más clara y directa
### 13. git merge
Integra los cambios de una rama en otra, preservando el historial completo.

Caso de uso: Se utiliza para unificar ramas con main.
### 14. git rebase
Reaplica los commits de una rama sobre otra, creando un historial lineal y más limpio.

Caso de uso: Se utiliza para integrar cambios de main en alguna rama sin crear un commit de fusión extra.
### 15. git log
Muestra el historial completo de commits de la rama actual (hash, autor, fecha, mensaje).

Caso de uso: Se utiliza para saber quién hizo un cambio y cuándo.
### 16. git diff
Muestra las diferencias entre estados del repositorio: directorio de trabajo, staging area, commits o ramas.

Caso de uso: Se utiliza antes de hacer commit para revisar exactamente qué líneas se cambiaron.
### 17. git reset
Deshace commits moviéndose a un estado anterior. Tiene tres modos: 

git reset --soft HEAD    # deshace el commit, conserva los cambios en staging

git reset --mixed HEAD   # deshace el commit, saca los cambios del staging

git reset --hard HEAD    # deshace el commit y elimina los cambios por completo

Caso de uso: Se utiliza cuando Hiciste un commit con errores y necesitas deshacerlo.
### 18. git stash
Guarda temporalmente los cambios no confirmados y deja el directorio limpio en el último commit.

Caso de uso: Se utiliza cuando se necesita cambiar de rama pero sin perder el trabajo en curso.
### 19. git stash pop
Recupera los últimos cambios guardados con stash y los aplica al directorio actual.

Caso de uso: Se utiliza para volver a alguna rama y retomar el trabajo que se había guardado.
### 20. git clean
 Elimina archivos sin rastrear del directorio de trabajo (los que Git no está siguiendo).

 Caso de uso: Se utiliza para borrar archivos temporales o de compilación.
