import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/FilterSlice";
import { selectFilter } from "redux/ContactsSelectors";
import { FilterInput } from "./Filter.styled";

export const Filter = () => {
    const filterQuery = useSelector(selectFilter);
    const dispatch = useDispatch();

    const onFilterChange = event => dispatch(setFilter(event.currentTarget.value));

    return (
        <div>
            <label>
                <FilterInput type="text" placeholder="Find contact"value={filterQuery} onChange={onFilterChange} />
            </label>
        </div>
    )
}