// State argument is not application state, only the state
// this specific reducer is responsible for.

// When the user first boots the app up, there will be no state, unless
// we set a default. Undefined won't ever work, so at the very least, use null

// Never mutate the state, return a fresh object
export default function(state = null, action) {
    console.log('Action received', action);

    return state;
}
