import {all} from 'redux-saga/effects'
import { watchDisplayListSaga } from './displaylist/saga'

export default function* rootSaga() {
   yield all([
       watchDisplayListSaga()
   ])

}