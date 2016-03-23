import fetch from 'isomorphic-fetch'

export function uploadRequest() {
  return {
    type: 'UPLOAD_REQUEST',
    payload: {
      isUploading: true,
      isUploaded: false
    }
  }
};

export function uploadSuccess(url) {
  return {
    type: 'UPLOAD_SUCCESS',
    payload: {
      isUploading: false,
      isUploaded: true,
      photoUrl: url
    }
  }
};

export function uploadError(message) {
  return {
    type: 'UPLOAD_FAILURE',
    payload: {
      isUploading: false,
      isUploaded: false,
      message: message
    }
  }
};

export function UploadPhoto(photo, photoData) {

  const config = {
    method: 'POST',
    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
    body: `username=${photoData.userId}&title=${photoData.title}&description=${photoData.description}`,
    attach: photo
  }

  return (dispatch) => {
    dispatch(uploadRequest())
    return fetch('http://localhost:8000/api/media/upload', config)
      .then((response) => {
        if ( !response.ok ) {
          dispatch(uploadError('Error uploading photo'))
          return Promise.reject('Error uploading photo')
        }
        return response.json();
      })
      .then((url) => {
        dispatch(uploadSuccess(url))
      })
      .catch((err) => {
        if ( !url ) {
          dispatch(authError('Error uploading photo; perhaps your photo was too large'));
        }
        console.log("Error uploading photo: ", err)
      })
  }
}

