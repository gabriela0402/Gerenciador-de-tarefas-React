function Input(props) { // <--- Verifique se o nome está correto aqui
  return (
    <input
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      {...props}

    />
  );
}

export default Input; // <--- Verifique se essa linha existe