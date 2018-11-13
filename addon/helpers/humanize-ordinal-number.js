import {helper} from '@ember/component/helper';
import Humanize from 'humanize';

export function humanizeOrdinalNumber(params/*, hash*/) {
  let [value] = params;
  return Humanize.ordinal(value);
}

export default helper(humanizeOrdinalNumber);
