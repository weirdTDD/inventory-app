import { redirect } from "next/navigation";
import { stackServerApp } from "../stack/server";

export type CurrentUser = ReturnType<typeof stackServerApp.getUser> extends Promise<infer U> ? U : never;

export async  function getCurrentUser() {
    const user = await stackServerApp.getUser()
    if (!user) {
        redirect("/sign-in")
    }

     console.log("Available user properties:", Object.keys(user || {}));
    return user;
}