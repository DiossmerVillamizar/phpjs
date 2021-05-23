<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manipulación Manual del DOM</title>
</head>
<body>
    <h1>Manipulación Manual del DOM</h1>
    <form id="todo-form">
        <input type="text" name="todo-item" id="todo-item" placeholder="Tarea por hacer">
        <input type="submit" value="Agregar">
    </form>
    <h2>Lista de Tareas</h2>
    <ul id="todo-list"></ul>
    <script>
        const d=document,
        $item = d.getElementById('todo-item'),
        $list = d.getElementById('todo-list');
        d.addEventListener('submit',e=>{
            if(!e.target.matches('#todo-form'))return false;
            e.preventDefault();
            //Agregar item a la lista
            let $li = d.createElement('li');
            $li.textContent=$item.value;
            $list.appendChild($li);
            //limpiar el input
            $item.value="";
            $item.focus();
        })
    </script>
</body>
</html>