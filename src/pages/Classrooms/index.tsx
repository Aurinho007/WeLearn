import PrimaryButton from "../../components/Buttons/PrimaryButton";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import TerciaryButton from "../../components/Buttons/TerciaryButton";

const Classrooms = () => {
  return (
    <>
      <h1>Salas</h1>
      <div style={{ width: "25%", marginTop: '50px' }}>
        <div style={{padding: '20px'}}>
          <PrimaryButton
            onClick={() => console.log("Clicou")}
            text="Criar conta"
          />
        </div>
        <div style={{padding: '20px'}}>
          <SecondaryButton
            onClick={() => console.log("Clicou")}
            text="Criar conta"
            outside="blue"
            Ffamily="roboto"
            Fweight={400}
            Fsize={1.2}
          />
        </div>
        <div style={{padding: '20px'}}>
          <TerciaryButton
            onClick={() => console.log("Clicou")}
            text="Criar conta"   
            Fsize={1.2}
            colored
          />
        </div>
      </div>
    </>
  );
};

export default Classrooms;