import { Navlink } from "./Navlink";

export class Navbar {
    links:Navlink[];
    
    constructor(isConnected : boolean) {
        this.links = this.getLinks(isConnected);
    }

    private getLinks(isConnected : boolean) : Navlink[] {
        let links : Navlink[] | undefined = undefined;
        if(isConnected) {
            links = [
                new Navlink("/myprofile", "My Profile"),
                new Navlink("/quests", "Quests"),
                new Navlink("/shop", "Shop"),
                new Navlink("/logout", "Logout")
            ]
        } else {
            links = [
                new Navlink("/register", "Register"),
                new Navlink("/login", "Login"),
            ]
        }

        return links;
    }
}