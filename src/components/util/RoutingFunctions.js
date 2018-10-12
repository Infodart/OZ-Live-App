import React from 'react';
import {NavigationActions} from 'react-navigation';


export const navigateToScreen = function navigateToScreen(screenName, navigationProp) {
    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({routeName: screenName})
        ]
    });
    if (navigationProp !== null)
        navigationProp.navigate(screenName);
};

export const resetEntireBackStack = function resetEntireBackStack(screenName, navigationProp) {
    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({routeName: screenName })
        ],
        key: null
    });
    navigationProp.dispatch(resetAction);
};

export const resetEntireBackStackWithParams = function resetEntireBackStackWithParams(screenName, navigationProp, params) {
    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({routeName: screenName, params: params})
        ],
        key: null
    });
    navigationProp.dispatch(resetAction);
};