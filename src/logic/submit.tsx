import { PostCard } from "./database";
import { useUser } from "@auth0/nextjs-auth0/client";
import { UserProfile } from "@auth0/nextjs-auth0/client";

/**
 * This function should:
 *   1. Send the post card as a image through email.
 *   2. Store the post card in localForage to be viewed in the gallery.
 * 
 *   This function should only be used if the user has signed in.
 * 
 * @param post_card the post card to submit
 */
export default function SubmitPostCard(event: any): void {
    const { user, error, isLoading } = useUser();

    const url = "https://script.google.com/macros/s/AKfycbzN3-Gv8UmruqE1Ejh_CfS19_1s8ObCoecutDUbAsOPNF9VM54HouqNFvk0tH-Rgrl2/exec";

    if (user == undefined) {
        throw new Error("User was not signed in when Submit() was called.");
    }

    // todo
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);
    fetch(url, {
        method: 'POST',
        body: data,
    })
        .then(() => {
            alert("Success!");
        })
}