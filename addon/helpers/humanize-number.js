import {helper} from '@ember/component/helper';
import Humanize from 'humanize';

export function humanizeNumber(params, namedArgs) {
  let [number] = params;

  let precision = namedArgs.precision === undefined ? 0 : namedArgs.precision;
  let thousand = namedArgs.thousand === undefined ? ',' : namedArgs.thousand;
  let decimal = namedArgs.decimal === undefined ? '.' : namedArgs.decimal;

  return Humanize.formatNumber(number, precision, thousand, decimal);
}

export default helper(humanizeNumber);
