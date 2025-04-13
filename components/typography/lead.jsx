const Lead = ({ children, className = "", style = {} }) => {
    return (
        <h1 style={style} className={`text-xl text-muted-foreground ${className}`}>
            {children}
        </h1>
    );
};

export default Lead;
