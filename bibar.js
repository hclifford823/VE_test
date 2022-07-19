// Data gathered from http://populationpyramid.net/germany/2015/

// Age categories
var categories = [
   'Switzerland', 'Finland', 'Norway', 'Austria',
   'Estonia', 'Luxembourg', 'Ireland', 'Czechia',
   'Netherlands', 'Poland', 'Slovenia', 'Denmark',
   'Belgium', 'Latvia', 'Malta', 'Hungary',
   'France', 'Germany', 'Italy', 'Croatia',
   'Euro area-19', 'Slovakia', 'Spain', 'Romania',
   'Serbia', 'Lithuania', 'Portugal', 'Greece',
   'North Macedonia', 'Cyprus', 'Turkey', 'Bulgaria',
   'Albania'
];

Highcharts.chart('container', {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Changes in home heating security in Europe, 2020'
  },
  subtitle: {
    text: 'Source: Eurostat'
  },
  accessibility: {
    point: {
      valueDescriptionFormat: '{index}. Income situation in relation to the risk of poverty threshold {xDescription}, {value}%.'
    }
  },
  xAxis: [{
    categories: categories,
    reversed: false,
    labels: {
      step: 1
    },
    accessibility: {
      description: 'Above 60% of median equivalised income'
    }
  }, { // mirror axis on right side
    opposite: true,
    reversed: false,
    categories: categories,
    linkedTo: 0,
    labels: {
      step: 1
    },
    accessibility: {
      description:'Below 60% of median equivalised income'
    }
  }],
  yAxis: {
    title: {
      text: null
    },
    labels: {
      formatter: function () {
        return Math.abs(this.value) + '%';
      }
    },
    accessibility: {
      description: 'Percentage population',
      rangeDescription: 'Range: 0 to 80%'
    }
  },

  plotOptions: {
    series: {
      stacking: 'normal'
    }
  },

  tooltip: {
    formatter: function () {
      return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
        'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 1) + '%';
    }
  },

  series: [{
    name: 'Above 60% of median equivalised income',
    data: [
      -0.1, -1.7, -0.4, -1.0,
      -2.0, -3.2, -2.9, -1.8,
      -1.5, -2.2, -1.9, -1.9,
      -2.7, -4.0, -5.6, -2.7,
      -5.0, -5.3, -6.1, -3.1,
      -5.8, -4.0, -7.9, -5.9,
      -4.8, -20.4, -14.3, -12.4,
      -19.4, -17.5, -13.7, -20.7,
      -29.7]
    ]
  }, {
    name: 'Below 60% of median equivalised income',
    data: [
      0.3, 2.6, 3.8, 4.2,
      5.5, 5.8, 6.1, 6.8,
      8.8, 8.9, 9.8, 10.9,
      12.6, 13.2, 14.9, 14.9,
      15.8, 16.0, 17.2, 17.5,
      17.9, 19.2, 22.3, 23.4,
      26.2, 33.6, 33.8, 39.2,
      39.6, 41.6, 42.6, 49.2,
      57.5
    ]
  }]
});
