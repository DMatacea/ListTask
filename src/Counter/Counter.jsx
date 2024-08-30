import "./Counter.css"

function Counter({ total, completed }) {
  return (
    <h1>
      Has completado {completed} de {total} TODOS
    </h1>
  );
}

export { Counter };
