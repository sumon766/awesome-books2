import { DateTime } from './luxon.js';

const date = DateTime.now();
const now = date.toLocaleString(DateTime.DATETIME_MED);
export default now;