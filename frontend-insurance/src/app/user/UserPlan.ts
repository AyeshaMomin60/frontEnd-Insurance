import { Policy } from "../admin/policy/Policy";

export interface UserPlan{
    userId: number,
    name: string,
    mobile: string,
    email:string,
    password: string
    plan:Policy

    
}