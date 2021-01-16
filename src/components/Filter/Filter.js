import style from './Filter.module.css';
import { connect } from 'react-redux';
import { actionSetFilter } from '../../redux/reduxActions';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <input
      className={style.input__filter}
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => handleFilterChange(target.value)}
      placeholder="Enter name for Search"
    />
  );
};
const mapStateToProps = state => ({
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  handleFilterChange: valueInput => dispatch(actionSetFilter(valueInput)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
