import Service from '@ember/service';
import Humanize from 'humanize';

export default Service.extend({

  //numbers
  formatNumber(number, precision = 0, thousand = ',', decimal = '.') {
    return Humanize.formatNumber(number, precision, thousand, decimal);
  },
  intComma(number, decimals = 0) {
    return Humanize.intComma(number, decimals);
  },
  compactInteger(input, decimals = 0) {
    return Humanize.compactInteger(input, decimals);
  },
  boundedNumber(num, bound = 100, ending = '+') {
    return Humanize.boundedNumber(num, bound, ending);
  },
  ordinal(value) {
    return Humanize.ordinal(value);
  },
  times(value, overrides = {}) {
    return Humanize.times(value, overrides);
  },
  pace(value, intervalMs, unit = 'time') {
    return Humanize.pace(value, intervalMs, unit);
  },
  fileSize(filesize, precision = 2) {
    return Humanize.fileSize(filesize, precision);
  },

  //Strings
  pluralize(number, singular, plural) {
    return Humanize.pluralize(number, singular, plural);
  },
  truncate(str, length = 100, ending = '...') {
    return Humanize.truncate(str, length, ending);
  },
  truncateWords(string, length) {
    return Humanize.truncateWords(string, length);
  },
  nl2br(string, replacement = '<br/>') {
    return Humanize.nl2br(string, replacement);
  },
  br2nl(string, replacement = '\r\n') {
    return Humanize.br2nl(string, replacement);
  },
  capitalize(string, downCaseTail = false) {
    return Humanize.capitalize(string, downCaseTail);
  },
  capitalizeAll(string) {
    return Humanize.capitalizeAll(string);
  },
  titleCase(string) {
    return Humanize.titleCase(string);
  },

  //arrays
  oxford(items, limit, limitStr) {
    return Humanize.oxford(items, limit, limitStr);
  },
  frequency(list, verb) {
    return Humanize.frequency(list, verb);
  },

  //utility
  toFixed(value, precision) {
    return Humanize.toFixed(value, precision);
  },
  normalizePrecision(value, base) {
    return Humanize.normalizePrecision(value, base);
  }
});
