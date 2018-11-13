import {helper} from '@ember/component/helper';
import Humanize from "humanize";

export function humanizeCompactNumber(params, namedArgs) {
  let [input] = params;

  let decimals = namedArgs.decimals === undefined ? 0 : namedArgs.decimals;

  return Humanize.compactInteger(input, decimals);
}


export default helper(humanizeCompactNumber);
