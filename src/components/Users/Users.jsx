import React from "react";
import style from "./Users.module.css";
import * as axios from "axios";
import avatarImg from "../../assets/images/users.webp";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map((p) => {
            return (
              <span
                className={
                  this.props.currentPage === p ? style.pageCountSelector : null
                }
                onClick={(e) => {
                  this.onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          })}
        </div>
        {this.props.users.map((u) => (
          <div key={u.id} className={style.appWrapper}>
            <div className={`${style.avaImg} ${style.appWrapperContent}`}>
              <img src={u.photos.small != null ? u.photos.small : avatarImg} />
            </div>
            <div className={`${style.status} ${style.appWrapperContent}`}>
              <div className={style.statusChild}>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </div>
              <div className={style.statusChild}>
                <div>{"u.location.city"}</div>
                <div>{"u.location.country"}</div>
              </div>
            </div>
            <div className={`${style.followBtn} ${style.appWrapperContent}`}>
              {u.followed ? (
                <button
                  onClick={() => {
                    this.props.unfollow(u.id);
                  }}
                >
                  UNFOLLOWED
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.follow(u.id);
                  }}
                >
                  FOLLOWED
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
