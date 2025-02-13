import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from "helpers/withRouter";
import moment from 'moment'
import ContentLoader from "react-content-loader"
import { ServiceFactory } from 'services';
import {
  setBoardYear,
  setBoardModels,
} from "redux/board/Action";


class BoardsPage extends Component {

  constructor(props) {
    super(props);
    let isLoading = true;
    if(0 < this.props.boards.models.length) {
      isLoading = false;
    }
    this.state = {
      isLoading: isLoading,
    }
  }

  componentDidMount() {
    // 年の指定がなければ、現在の年
    let year = this.props.boards.year;
    if((!year | this.props.boards.models.length <= 0)) {
      year = this.props.router.params.year;
      year = (year === undefined) ? moment().year() : year
      this.props.setBoardYear(year);
      let service = ServiceFactory.createBoardsService();
      service.listBoards(year).then(arrModels => {
        this.props.setBoardModels(arrModels);
        this.setState({
          isLoading: false,
        });
      }).catch(err => {
        alert(err);
      });
    }
  }

  render() {
    if(this.state.isLoading === true) {
      return (
        <main id="main">
          <div className="main-item board">
            <h2 className="main-title">
              <span className="title">{this.props.boards.year + '年 '}回覧板</span>
            </h2>
            <div className="main-body">
              <div className="board-container">
                <div className="board-container-inner">
                  <div className="board-list">
                    <div className="board-item">
                      <div className="board-item-container">
                        <div className="board-item-container-inner">
                          <div className="board-title text-mute">
                            <ContentLoader
                              speed={2}
                              width={140}
                              height={24}
                              backgroundColor="#f3f3f3"
                              foregroundColor="#ecebeb"
                            >
                              <rect x="0" y="0" rx="0" ry="0" width="140" height="24"/>
                            </ContentLoader>
                          </div>
                          <div className="board-body">
                            <ContentLoader
                              speed={2}
                              width={280}
                              height={360}
                              backgroundColor="#f3f3f3"
                              foregroundColor="#ecebeb"
                            >
                              <rect x="0" y="0" rx="0" ry="0" width="280" height="360"/>
                            </ContentLoader>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="board-item">
                      <div className="board-item-container">
                        <div className="board-item-container-inner">
                          <div className="board-title text-mute">
                            <ContentLoader
                              speed={2}
                              width={140}
                              height={24}
                              backgroundColor="#f3f3f3"
                              foregroundColor="#ecebeb"
                            >
                              <rect x="0" y="0" rx="0" ry="0" width="140" height="24"/>
                            </ContentLoader>
                          </div>
                          <div className="board-body">
                            <ContentLoader
                              speed={2}
                              width={280}
                              height={360}
                              backgroundColor="#f3f3f3"
                              foregroundColor="#ecebeb"
                            >
                              <rect x="0" y="0" rx="0" ry="0" width="280" height="360"/>
                            </ContentLoader>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="board-item">
                      <div className="board-item-container">
                        <div className="board-item-container-inner">
                          <div className="board-title text-mute">
                            <ContentLoader
                              speed={2}
                              width={140}
                              height={24}
                              backgroundColor="#f3f3f3"
                              foregroundColor="#ecebeb"
                            >
                              <rect x="0" y="0" rx="0" ry="0" width="140" height="24"/>
                            </ContentLoader>
                          </div>
                          <div className="board-body">
                            <ContentLoader
                              speed={2}
                              width={280}
                              height={360}
                              backgroundColor="#f3f3f3"
                              foregroundColor="#ecebeb"
                            >
                              <rect x="0" y="0" rx="0" ry="0" width="280" height="360"/>
                            </ContentLoader>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="board-item">
                      <div className="board-item-container">
                        <div className="board-item-container-inner">
                          <div className="board-title text-mute">
                            <ContentLoader
                              speed={2}
                              width={140}
                              height={24}
                              backgroundColor="#f3f3f3"
                              foregroundColor="#ecebeb"
                            >
                              <rect x="0" y="0" rx="0" ry="0" width="140" height="24"/>
                            </ContentLoader>
                          </div>
                          <div className="board-body">
                            <ContentLoader
                              speed={2}
                              width={280}
                              height={360}
                              backgroundColor="#f3f3f3"
                              foregroundColor="#ecebeb"
                            >
                              <rect x="0" y="0" rx="0" ry="0" width="280" height="360"/>
                            </ContentLoader>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="board-item">
                      <div className="board-item-container">
                        <div className="board-item-container-inner">
                          <div className="board-title text-mute">
                            <ContentLoader
                              speed={2}
                              width={140}
                              height={24}
                              backgroundColor="#f3f3f3"
                              foregroundColor="#ecebeb"
                            >
                              <rect x="0" y="0" rx="0" ry="0" width="140" height="24"/>
                            </ContentLoader>
                          </div>
                          <div className="board-body">
                            <ContentLoader
                              speed={2}
                              width={280}
                              height={360}
                              backgroundColor="#f3f3f3"
                              foregroundColor="#ecebeb"
                            >
                              <rect x="0" y="0" rx="0" ry="0" width="280" height="360"/>
                            </ContentLoader>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="board-item">
                      <div className="board-item-container">
                        <div className="board-item-container-inner">
                          <div className="board-title text-mute">
                            <ContentLoader
                              speed={2}
                              width={140}
                              height={24}
                              backgroundColor="#f3f3f3"
                              foregroundColor="#ecebeb"
                            >
                              <rect x="0" y="0" rx="0" ry="0" width="140" height="24"/>
                            </ContentLoader>
                          </div>
                          <div className="board-body">
                            <ContentLoader
                              speed={2}
                              width={280}
                              height={360}
                              backgroundColor="#f3f3f3"
                              foregroundColor="#ecebeb"
                            >
                              <rect x="0" y="0" rx="0" ry="0" width="280" height="360"/>
                            </ContentLoader>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )
    }
    return (
      <main id="main">
        <div className={1 <= this.props.boards.models.length ? "main-item board" : "main-item"}>
          <h2 className="main-title">
            <span className="title">{this.props.boards.year + '年 '}回覧板</span>
          </h2>
          <div className="main-body">
            <div className="board-container">
              <div className="board-container-inner">
                <div className="board-list">
                  {this.props.boards.models.map((oModel) =>
                    <div className="board-item" key={oModel.id}>
                      <div className="board-item-container">
                        <div className="board-item-container-inner">
                          <div className="board-title text-mute">
                            <a href={oModel.getFile()} target="_blank" rel="noreferrer">{oModel.getTitle()}</a>
                          </div>
                          <div className="board-body">
                            <a href={oModel.getFile()} target="_blank" rel="noreferrer">
                              <img src={oModel.getThumbnail()} width="280" height="360" alt="board"/>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    boards: {
      year: state.board.year,
      models: state.board.models,
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setBoardYear: function(year) {
      dispatch(setBoardYear(year));
    },
    setBoardModels: function(year) {
      dispatch(setBoardModels(year));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BoardsPage));
