/* MOCK CHAT API, JUST FOR THE EXAMPLE    */
/* You DON'T need to read this code !!!!! */
/* It just simulates a chat API           */

export class ChatAPI {
    static statusListeners = {};
    static friends = [
        { id: 42, username: "jsnow", isOnline: false },
        { id: 44, username: "tlann", isOnline: false }
    ];

    static getFriends() {
        return this.friends;
    }

    static subscribeToFriendStatus(id, changeHandler) {
        if (!this.statusListeners[id]) this.statusListeners[id] = [];
        this.statusListeners[id].push(changeHandler);

        let friend = this.friends.find(f => f.id === id);

        changeHandler(friend);
    }

    static unsubscribeFromFriendStatus(id, changeHandler) {
        let changeHandlerIndex = this.statusListeners[id].findIndex(
            f => f === changeHandler
        );

        this.statusListeners[id].splice(changeHandlerIndex, 1);
    }

    static toggleFriendStatus(id) {
        let friend = this.friends.find(f => f.id === id);

        friend.isOnline = !friend.isOnline;

        for (let listener of this.statusListeners[id]) {
            // Run the change handlers
            listener({ isOnline: friend.isOnline });
        }
    }
}
