/**
 * a post card
 */
export class PostCard {
    private content: string;
    private to: string;
    private from: string;
    private id: string;

    /**
     * Generate a post card
     * 
     * @param content 
     * @param to 
     * @param from 
     */
    public constructor(content: string, to: string, from: string, id: string) {
        this.content = content;
        this.to = to;
        this.from = from;
        this.id = id;
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

    public GetID(): string {
        return this.id;
    }
}

/**
 * Database class to store/read PostCards
 */
export class Database {
    /**
     * Store the post card in the local database
     * 
     * returns: whether or not it was successful
     * 
     * @param pc the post card
     */
    public static StorePostCard(pc: PostCard): boolean {
        return false;
    }

    /**
     * Retreive a post card from local forage:
     * 
     * @param id id of the post card
     */
    public static RetrievePostCard(id: string): PostCard {
        return new PostCard("", "", "", "id");
    }

    /**
     * Get all post cards from localForage
     * 
     * @returns all post cards
     */
    public static RetrieveAllPostCards(): PostCard[] {
        return [];
    }
}