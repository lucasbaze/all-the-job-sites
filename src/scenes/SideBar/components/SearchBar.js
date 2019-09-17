import React from 'react';

//State
import * as searchActions from '../../../reducers/searchReducer';
import * as categoryActions from '../../../reducers/categoryReducer';
import { useStateValue } from '../../../state';

//Components
import { Header, Button, Input } from 'semantic-ui-react';

const SearchBar = ({
    searchValue,
    setSearchValue,
    isLoading,
    handleSearchChange,
}) => {
    const [{ category }, dispatch] = useStateValue();

    return (
        <div>
            <Header as="h4" style={{ marginBottom: 5 }}>
                Looking for:
            </Header>
            <div
                style={{
                    marginTop: 10,
                    textAlign: 'center',
                    display: 'flex',
                }}
            >
                <Button
                    icon={category.all ? 'compress' : 'expand arrows alternate'}
                    basic
                    onClick={() => {
                        categoryActions.toggleAll(dispatch);
                        window.gtag('event', 'collapse', {
                            event_category: 'navigation',
                            event_label: 'expand collapse links',
                        });
                    }}
                />
                <Input
                    action={{
                        icon: 'close',
                        basic: true,
                        onClick: function() {
                            searchActions.updateSearch(dispatch, '');
                            setSearchValue('');
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
                    value={searchValue}
                    placeholder="Sales, React, Military..."
                    style={{ flex: 1 /* use full width */ }}
                />
            </div>
        </div>
    );
};

export default SearchBar;
