class BandsiteApi {
    constructor(apiKey) {
        this.baseurl = "https://project-1-api.herokuapp.com/";
        this.apiKey = apiKey
    }

    async getShows() {
        const url = '';
        const response = await axios.get(url);

        const Shows = response.data;
        return Shows;
    }
    async getComments() {
        const url = '';
        const response = await axios.get(url);

        const comments = response.data;
        return comments;
    }
    async postComments(newComment) {
        const url = '';
        const response = await axios.post(url, newComment);

        return response;
    }
    async deleteComment(id) {
        const url = '';
    }
}
