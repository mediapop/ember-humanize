import Service from '@ember/service';
import Humanize from 'humanize';

export default Service.extend({

  //numbers
  formatNumber(number, precision = 0, thousand = ',', decimal = '.') {
    Humanize.formatNumber(number, precision, thousand, decimal);
  },
  intComma(number, decimals = 0) {
    Humanize.intComma(number, decimals);
  },
  compactInteger(input, decimals = 0) {
    Humanize.compactInteger(input, decimals);
  },
  boundedNumber(num, bound = 100, ending = '+') {
    Humanize.boundedNumber(num, bound, ending);
  },
  ordinal(value) {
    Humanize.ordinal(value);
  },
  times(value, overrides = {}) {
    Humanize.times(value, overrides);
  },
  pace(value, intervalMs, unit = 'time') {
    Humanize.pace(value, intervalMs, unit);
  },
  fileSize(filesize, precision = 2) {
    Humanize.fileSize(filesize, precision);
  },

  //Strings
  pluralize(number, singular, plural) {
    Humanize.pluralize(number, singular, plural);
  },
  truncate(str, length = 100, ending = '...') {
    Humanize.truncate(str, length, ending);
  },
  truncateWords(string, length) {
    Humanize.truncateWords(string, length);
  },
  nl2br(string, replacement = '<br/>') {
    Humanize.nl2br(string, replacement);
  },
  br2nl(string, replacement = '\r\n') {
    Humanize.br2nl(string, replacement);
  },
  capitalize(string, downCaseTail = false) {
    Humanize.capitalize(string, downCaseTail);
  },
  capitalizeAll(string) {
    Humanize.capitalizeAll(string);
  },
  titleCase(string) {
    Humanize.titleCase(string);
  },

  //arrays
  oxford(items, limit, limitStr) {
    Humanize.oxford(items, limit, limitStr);
  },
  frequency(list, verb){
    Humanize.frequency(list, verb);
  },

  //utility
  toFixed(value, precision){
    Humanize.toFixed(value, precision);
  },
  normalizePrecision(value, base){
    Humanize.normalizePrecision(value, base);
  }
});
