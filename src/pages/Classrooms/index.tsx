import PrimaryButton from '../../components/Buttons/PrimaryButton';
import { useNavigate } from 'react-router-dom';

const Classrooms = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/sala');
  }
  
  return (
    <>
      <h1>Salas</h1>
        <div style={{padding: '20px'}}>
          <PrimaryButton
            onClick={handleClick}
            text="Abrir sala"
          />
        </div>
    </>
  );
};

export default Classrooms;