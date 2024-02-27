import { atom } from 'recoil';

const session = atom({
    key: "userSession", 
    default: {
        first_name: '', 
        last_name: '',
        email: '',
        username: '',
        role: ''
    },
});

// export const sessionState = selector({
//     key: "userSession",
//     get: ({get}) => {
//         const userSession = get(session);

//         return userSession;
//     }
// })

export default session;