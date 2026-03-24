function Title(props){
    return(
        <h1 className="w-full text-3xl text-slate-100 font-bold text-center px-10">
            {props.children}
        </h1>
    )
}

export default Title;