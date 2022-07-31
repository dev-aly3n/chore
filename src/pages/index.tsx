import Chore from "../components/Chore";

export default function home(): JSX.Element {
  const click = () => {
    console.log("clicked");
  };

  return (
    <div className="w-screen min-h-screen bg-slate-50 flex justify-center items-center gap-5">
      <div className=" h-full flex flex-col justify-center items-center gap-5">
        <Chore variant="primary" clickHandler={click}>
          Chore
        </Chore>
        <Chore variant="secondary" clickHandler={click}>
          Chore
        </Chore>
        <Chore variant="outline" clickHandler={click}>
          Chore
        </Chore>
      </div>
      <div className=" h-full flex flex-col justify-center items-center gap-5">
        <Chore variant="primary">Chore</Chore>
        <Chore variant="secondary">Chore</Chore>
        <Chore variant="outline">Chore</Chore>
      </div>
      <div className=" h-full flex flex-col justify-center items-center gap-5">
        <Chore variant="primary" clickHandler={click}>
          primary
        </Chore>
        <Chore variant="secondary" clickHandler={click}>
          secondary
        </Chore>
        <Chore variant="outline" clickHandler={click}>
          outline
        </Chore>
      </div>
      <div className=" h-full flex flex-col justify-center items-center gap-5">
        <Chore variant="primary">primary</Chore>
        <Chore variant="secondary">secondary</Chore>
        <Chore variant="outline">outline</Chore>
      </div>
    </div>
  );
}
