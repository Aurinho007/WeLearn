import PrimaryButton from "../../components/Buttons/PrimaryButton";
import SecondaryButton from "../../components/Buttons/SecondaryButton";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
     <PrimaryButton
        onClick={() => console.log("Clicou")}   
        text="Criar conta"
     />
     <SecondaryButton
        onClick={() => console.log("Clicou")}
        text="Criar conta" 
        outside="blue"
        fontFamily="roboto"
        fontWeight={400}
        fontSize={30}
     />
    </>
  );
};

export default Home;
