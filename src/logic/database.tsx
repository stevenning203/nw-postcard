import localforage from 'localforage'

/**
 * a post card
 */
export class PostCard {
    private content: string;
    private to: string;
    private from: string;

    /**
     * Generate a post card
     * 
     * @param content 
     * @param to 
     * @param from 
     */
    public constructor(content: string, to: string, from: string) {
        this.content = content;
        this.to = to;
        this.from = from;
    }

    public GetContent(): string {
        return this.content;
    }

    public GetFrom(): string {
        return this.from;
    }

    public GetTo(): string {
        return this.to;
    }
}

/**
 * Database class to store/read PostCards
 */
export class Database {
    private static array: PostCard[] = [];

    /**
     * Store the post card in the local database
     * 
     * returns: whether or not it was successful
     * 
     * @param pc the post card
     */
    public static StorePostCard(pc: PostCard): boolean {
        Database.array.push(pc);
        localforage.setItem("data", Database.array);
        return true;
    }

    /**
     * Get all post cards from localForage
     * 
     * @returns all post cards -- the array will be empty if there is an error.
     */
    public static RetrieveAllPostCards(): PostCard[] {
        let x: PostCard[] = [];
        localforage.getItem('data', function (err, value: PostCard[] | null) {
            if (value != null) {
                x = value;
            }
        });
        return x;
    }
}