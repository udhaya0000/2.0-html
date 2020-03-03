module.exports = {
    'extends': 'stylelint-config-standard',
    'plugins': ['stylelint-scss'],
    'rules': {
      'at-rule-no-unknown': null,
      'scss/at-rule-no-unknown': true,
      'no-descending-specificity': null,
      'no-missing-end-of-source-newline': null,
      'no-empty-source': null,
      'at-rule-empty-line-before': null,
      'selector-pseudo-element-colon-notation': 'single'
    },
  }