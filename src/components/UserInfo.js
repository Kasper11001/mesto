export class UserInfo {
  constructor({name, profession, avatar}) {
    this._name = document.querySelector(name);
    this._profession = document.querySelector(profession);
    this._avatar = document.querySelector(avatar)
  }
  getUserInfo() {
    return {
      name: this._name.textContent,
      profession: this._profession.textContent,
      avatar: this._avatar.src,
    }
  }
  setUserInfo(data) {
    this._name.textContent = data.name;
    this._profession.textContent = data.about;
    this._avatar.src = data.avatar;
  }
}
