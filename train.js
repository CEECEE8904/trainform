import axios from 'axios';
const TOKEN = "eyJhbGciOiJub25lIn0.eyJlbWFpbCI6ImNjbGFya2U4OTA0QGdtYWlsLmNvbSIsIm5hbWUiOiJDaHJpcyIsImlkIjoiM2I4ZmY5ZDQtNGIwOS00NjQ3LTg4NGEtMWU4ZmQ5ZmZlYmYzIn0"
const BASE_URL = 'http://wdi_friends.draketalley.com/api';
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${TOKEN}`
  }
});

export const fetchAllTrains = async () => {
  const response = await api.get(`/trains/ `);
  return response.data
  // Use api.get() to retrieve the trains from the Drakey api
}

export const postTrain = async (trainData) => {
  const newTrain = await api.get('/trains/', trainData)
  return newTrain.data;
  // Use api.post to post a new train the the Drakey api
}
