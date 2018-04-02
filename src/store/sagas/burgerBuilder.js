import { put } from 'redux-saga/effects';
import axios from '../../axios-orders';

import * as actions from '../actions/';

export function* initIngredientsSaga(action) {
  try {
    const response = yield axios.get('/ingredients.json');
    console.log(response);
    yield put(actions.setIngredients(response.data));
  } catch (err) {
    yield put(actions.fetchIngredientsFailed());
  }
}
