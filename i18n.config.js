export default {
  numberFormats: {
    de: {
      currency: {
        style: 'currency',
        currency: 'EUR',
        notation: 'standard',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
      decimal: {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
      decimalFree: {
        style: 'decimal',
      },
      percent: {
        style: 'percent',
        useGrouping: false,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
    },
  },
  datetimeFormats: {
    de: {
      shortDate: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      },
      longDate: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      },
      longDateNoYear: {
        month: 'long',
        day: 'numeric',
      },
      longDateNoDay: {
        month: 'long',
        day: 'numeric',
      },
      shortTime: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      },
      longTime: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      },
    },
  },
};
