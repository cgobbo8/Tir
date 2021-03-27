export const state = () => ({
    articles: []
})

export const mutations = {
    setArticle(state, newArticles) {
        state.articles = newArticles
    }
}

export const actions = {
    async nuxtServerInit({ commit }) {
        let response = await this.$axios.$get(
            "https://api.zotero.org/users/7549136/items"
        );
        await commit('setArticle', response)
    }
}