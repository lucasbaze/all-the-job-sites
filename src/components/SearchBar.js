import React, { useState, useEffect } from 'react';

//Actions / State
import * as searchActions from '../reducers/searchReducer';
import * as categoryActions from '../reducers/categoryReducer';
import { useStateValue } from '../state';

//Hooks
import { useDebounce } from '../hooks';

//Components
import { Header, Input } from 'semantic-ui-react';

const SearchBar = ({}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState('');
    const [{ searchValue }, dispatch] = useStateValue();

    //
    //Debouncer
    const debouncedSearchTerm = useDebounce(value, 300);

    //
    //When debounce complete, execute search
    useEffect(() => {
        if (debouncedSearchTerm) {
            searchActions.updateSearch(dispatch, value);
            setIsLoading(false);
        }
    }, [debouncedSearchTerm]);

    //
    //Updates value and sent to debounce
    const handleSearchChange = event => {
        setIsLoading(true);
        setValue(event.target.value);

        setTimeout(() => {
            if (value.length === 0) return;
            setIsLoading(false);
        }, 200);

        console.log(`${value} => ${event.target.value}`);
    };

    return (
        <Input
            action={{
                icon: 'close',
                basic: true,
                onClick: function() {
                    searchActions.updateSearch(dispatch, '');
                    setValue('');
                    categoryActions.toggleAll(dispatch);
                    window.gtag('event', 'search', {
                        event_category: 'navigation',
                        event_label: 'clear search',
                    });
                },
            }}
            actionPosition="left"
            loading={isLoading}
            onChange={e => {
                handleSearchChange(e);
                window.gtag('event', 'search', {
                    event_category: 'navigation',
                    event_label: 'searching',
                });
            }}
            fluid
            icon="search"
            value={value}
            placeholder="Sales, React, Military..."
            style={{ flex: 1 /* use full width */ }}
        />
    );
};

export default SearchBar;

// <Button
//     icon={category.all ? 'compress' : 'expand arrows alternate'}
//     basic
//     onClick={() => {
//         categoryActions.toggleAll(dispatch);
//         window.gtag('event', 'collapse', {
//             event_category: 'navigation',
//             event_label: 'expand collapse links',
//         });
//     }}
// />
