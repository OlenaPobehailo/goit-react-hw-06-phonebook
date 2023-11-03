import { Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;
