import alt from '../../alt';
import ArticlesActions from './actions';

class ArticlesStore {
  constructor() {
    this.articles = [];

    this.bindListeners({
      handleUpdateArticle: ArticlesActions.UPDATE_ARTICLE
    });
  }

  handleUpdateArticle(article) {
    console.warn('TODO');
    // this.article = article;
  }
}

export default alt.createStore(ArticlesStore, 'ArticlesStore');
