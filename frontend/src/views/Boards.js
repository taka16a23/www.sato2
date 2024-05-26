import React, { Component } from "react";
import queryString from 'query-string';
import { withRouter } from "helpers/withRouter";
import { ServiceFactory } from 'services';


class Boards extends Component {

  constructor(props) {
    super(props);
    this.models = [];
    this.state = {
      modelLength: this.models.length,
    }
  }

  componentDidMount() {
    let query = queryString.parse(this.props.router.location.search);
    let year = query['year'];
    var oParams = new URLSearchParams();
    var service = ServiceFactory.createBoardsService();
    service.listBoards(year).then(arrModels => {
      this.models = arrModels;
      this.setState({
        modelLength: this.models.length,
      });
    }).catch(err => {
      alert(err);
    });
  }

  render() {
    return (
      <main id="main">
        <div className={1 <= this.state.modelLength ? "main-item board" : "main-item"}>
          <h2 className="main-title">
            <span className="title">回覧板</span>
          </h2>
          <div className="main-body">
            <div className="board-container">
              <div className="board-container-inner">
                <div className="board-list">
                  {this.models.map((oModel) =>
                    <div className="board-item" key={oModel.id}>
                      <div className="board-item-container">
                        <div className="board-item-container-inner">
                          <div className="board-title text-mute">
                            <a href={oModel.getFile()} target="_blank">{oModel.getTitle()}</a>
                          </div>
                          <div className="board-body">
                            <a href={oModel.getFile()} target="_blank">
                              <img src={oModel.getThumbnail()} width="280px" height="360px"/>
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

export default withRouter(Boards);
