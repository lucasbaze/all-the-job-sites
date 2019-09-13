import React from 'react';

//State
import * as searchActions from '../../../reducers/searchReducer';
import { useStateValue } from '../../../state';

//Components
import { Header, Button, Input } from 'semantic-ui-react';

const SearchBar = ({ allOpen, setAllOpen, isLoading, handleSearchChange }) => {
    const [{ searchValue }, dispatch] = useStateValue();

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
                    icon={allOpen ? 'compress' : 'expand arrows alternate'}
                    basic
                    onClick={() => {
                        allOpen ? setAllOpen(false) : setAllOpen(true);
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
                            setAllOpen(false);
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
