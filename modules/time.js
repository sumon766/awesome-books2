/* eslint-disable import/prefer-default-export */
import { DateTime } from './luxon.js';

const date = DateTime.now();
export const now = date.toLocaleString(DateTime.DATETIME_MED);