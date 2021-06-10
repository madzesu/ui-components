import IconButton from '.';
import { FaBeer } from 'react-icons/fa';

const IconButtonDemo = () => {
  return (
    <div>
      <IconButton variant="primary">
        <FaBeer />
      </IconButton>
    </div>
  );
};

export default IconButtonDemo;