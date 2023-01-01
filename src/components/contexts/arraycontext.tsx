import { type } from "os";
import * as React from "react"
interface taskarrayInterface{
    tasktitle:string;
    taskexp:string;
    id:number;
}
const a:taskarrayInterface[]=[
    {
        tasktitle:"hey",
        taskexp:"qkejfq",
        id:2
    }
]
export const TaskArray=React.createContext<any>(a)