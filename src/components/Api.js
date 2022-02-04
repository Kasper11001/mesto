 export default class Api {
   constructor(options) {
     this._options = options;
   }
   _checkResponse(res) {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`)
   }
  getInitialCards() {
    return fetch(`${this._options.baseUrl}/cards`, {headers:this._options.headers})
    .then(this._checkResponse)
  }
  getProfileData() {
    return fetch(`${this._options.baseUrl}/users/me`, {headers:this._options.headers})
    .then(this._checkResponse)
  }
  updateProfileData(formValues) {
    return fetch(`${this._options.baseUrl}/users/me`, {
      headers:this._options.headers,
      method:'PATCH',
      body: JSON.stringify({
        name: formValues.name,
        about: formValues.profession,
      })
    })
    .then(this._checkResponse)
  }
  updateProfileAvatar(formValues) {
    return fetch(`${this._options.baseUrl}/users/me/avatar`, {
      headers:this._options.headers,
      method:'PATCH',
      body: JSON.stringify({
        avatar: formValues.link
      })
    })
    .then(this._checkResponse)
  }
  addCard(formValues) {
    return fetch(`${this._options.baseUrl}/cards`, {
      headers:this._options.headers,
      method:'POST',
      body: JSON.stringify({
        name: formValues.name,
        link: formValues.link,
      })
    })
    .then(this._checkResponse)
  }

  deleteCard(cardId) {
    return fetch(`${this._options.baseUrl}/cards/${cardId}`, {
      headers:this._options.headers,
      method:'DELETE',
    })
    .then(this._checkResponse)
  }
  likeCard(cardId) {
    return fetch(`${this._options.baseUrl}/cards/${cardId}/likes`, {
      headers:this._options.headers,
      method:'PUT',
    })
    .then(this._checkResponse)
  }
  deleteLike(cardId) {
    return fetch(`${this._options.baseUrl}/cards/${cardId}/likes`, {
      headers:this._options.headers,
      method:'DELETE',
    })
    .then(this._checkResponse)
  }
}

