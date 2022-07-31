interface props {
    variant:string;
    clickHandler?:()=>void;
}

const Chore:React.FC<props> = ({ children, variant, clickHandler }) => {
    return (
      <button
        onClick={clickHandler}
        className={`chore-container ${variant}`}
        disabled={!clickHandler}
      >
        {children}
      </button>
    );
  };
  
  export default Chore;
  