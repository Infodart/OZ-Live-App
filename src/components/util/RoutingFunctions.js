import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';

export const replaceCurrentScreenWithNewScreen = function replaceWithNewScreen(screenName, navigationProp) {
    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({routeName: screenName})
        ]
    });
    if (navigationProp !== null) {
        //console.log(navigationProp.state.key);
        navigationProp.dispatch(resetAction);
    }
};


export const resetWithDashboardOpen = function resetWithDashboardOpen(screenName, navigationProp) {
    const resetAction = NavigationActions.reset({
        index: 1,
        actions: [
            // open Dashboard first
            NavigationActions.navigate({routeName: 'Dashboard'}),
            // then stack your new page on top of it,
            // so that when user presses BackButton (Android)
            // he is redirected to the Dashboard
            NavigationActions.navigate({routeName: screenName}),
        ],
    });
    navigationProp.dispatch(resetAction);
}


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
/*export const resetEntireBackStack = function resetEntireBackStack(screenName, navigationProp) {
    let resetAction
    if (screenName === 'LoginScreen') {
        resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: screenName, params: {
                        fromReset: 'fromReset'
                    }
                })
            ],
            key: null
        });
        navigationProp.dispatch(resetAction);
    }
    else {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: screenName,params: {
                    fromReset: 'fromNOReset'
                }})
            ],
            key: null
        });
        navigationProp.dispatch(resetAction);
    }

};*/

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