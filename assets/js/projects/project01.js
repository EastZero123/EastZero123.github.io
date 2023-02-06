Highcharts.chart('graph01', {
  colors: ['#a176d4', '#632ba4'],

  chart: {
    type: 'area',
    defaultSeriesType: 'areaspline',
  },
  title: {
    text: null,
  },
  exporting: {
    enabled: false,
  },
  xAxis: {
    //categories: ['사전', '4주 후', '8주 후'],
    title: {
      enabled: false,
    },
    minPadding: 0,
    maxPadding: 0,
    tickInterval: 1,
    endOnTick: false,
    startOnTick: false,
    labels: {
      enabled: false,
    },
    /*labels: {
                    style: {
                      color: '#666'
                    }
                  }*/
  },
  yAxis: {
    min: 0,
    max: 60,
    tickInterval: 10,
    title: {
      text: null,
    },
    gridLineColor: '#eee',
    labels: {
      style: {
        color: '#666',
      },
    },
  },
  // tooltip: {
  //   split: true,
  //   valueSuffix: ' km'
  // },
  tooltip: { enabled: false },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true,
      },
      enableMouseTracking: false,
    },
    series: {
      marker: {
        fillColor: '#FFFFFF',
        lineWidth: 2,
        lineColor: null, // inherit from series
      },
      enableMouseTracking: false,
    },
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: '전동키트 제공',
      data: [42.16, 59.69],
      marker: {
        symbol: 'square',
      },
    },
    {
      name: '전동키트와 행동활성화 프로그램 제공',
      data: [24.29, 60.63],
      marker: {
        symbol: 'circle',
      },
    },
  ],
});
Highcharts.chart('graph02', {
  colors: ['#a176d4', '#632ba4'],

  chart: {
    type: 'area',
    defaultSeriesType: 'areaspline',
  },
  legend: {
    enabled: false,
  },
  title: {
    text: null,
  },
  exporting: {
    enabled: false,
  },
  xAxis: {
    //categories: ['사전', '4주 후', '8주 후'],
    title: {
      enabled: false,
    },

    /*min: 0.5,
                      max: 1.5,*/
    minPadding: 0,
    maxPadding: 0,
    tickInterval: 1,
    endOnTick: false,
    startOnTick: false,
    labels: {
      enabled: false,
    },
    /*labels: {
                        style: {
                          color: '#666'
                        }
                      }*/
  },
  yAxis: {
    min: 1,
    max: 13,
    tickInterval: 2,
    tickPositions: [1, 3, 5, 7, 9, 11, 13],
    startOnTick: false,
    title: {
      text: null,
    },
    gridLineColor: '#eee',
    labels: {
      style: {
        color: '#666',
      },
    },
  },
  tooltip: { enabled: false },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true,
      },
      enableMouseTracking: false,
    },
    series: {
      marker: {
        fillColor: '#FFFFFF',
        lineWidth: 2,
        lineColor: null, // inherit from series
      },
      enableMouseTracking: false,
    },
  },
  series: [
    {
      name: '전동키트 제공',
      data: [12.32, 9.42, 7.37],
      marker: {
        symbol: 'square',
      },
    },
    {
      name: '전동키트와 행동활성화 프로그램 제공',
      data: [8.4, 5.0, 2.53],
    },
  ],
});
