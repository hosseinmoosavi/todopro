
export default function taskkArray(state=[],action){
    switch(action.type){
    case'addTask':state=[...state+action.payload]
    }
}