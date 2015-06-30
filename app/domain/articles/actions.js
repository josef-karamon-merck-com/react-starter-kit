import alt from '../../alt';

class ArticlesActions {
  updateArticle(some) {
    this.dispatch(some);
  }
}

export default alt.createActions(ArticlesActions);
