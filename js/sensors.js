$(function () {
	// Apply theme
	Highcharts.setOptions({
		global: {
			 useUTC: false
		}
	});

	// Calculate milliseconds since last week
	var timeInMillis = new Date(Math.round(Date.now()/600000)*600000-(7 * 24 * 3600000)).getTime();

	// Temperature graph
  $('#temperature').highcharts({
	chart: {
		type: 'line',
      	zoomType: 'x'
		},
      title: {
          text: 'Weekly temperature measurements'
      },

      subtitle: {
          text: 'Outside temperature is calculated using a termistor and Steinhart-Hart equation.'
      },

      xAxis: {
      	type: 'datetime',
          tickInterval: 24 * 3600 * 1000, // one day
          tickWidth: 0,
          gridLineWidth: 1,
          labels: {
              align: 'left',
              x: 3,
              y: -3
          },
          dateTimeLabelFormats: {
          	day: '%A'
      	}
      },

      yAxis: [{ // left y axis
          title: {
              text: 'Temperature ('+unescape('%B0')+'C)'
          },
          labels: {
              align: 'left',
              x: 3,
              y: 16,
              format: '{value:.,0f}'
          },
          showFirstLabel: false
      }, { // right y axis
          linkedTo: 0,
          gridLineWidth: 0,
          opposite: true,
          title: {
              text: 'Temperature ('+unescape('%B0')+'C)'
          },
          labels: {
              align: 'right',
              x: -3,
              y: 16,
              format: '{value:.,0f}'
          },
          showFirstLabel: false
      }],

      tooltip: {
          shared: true,
          crosshairs: true
      },

      plotOptions: {
          series: {
              cursor: 'pointer',
              point: {
                  events: {
                      click: function (e) {
                          hs.htmlExpand(null, {
                              pageOrigin: {
                                  x: e.pageX || e.clientX,
                                  y: e.pageY || e.clientY
                              },
                              headingText: this.series.name,
                              maincontentText: Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':<br/> ' +
                                  this.y + ' ' + unescape('%B0')+'C',
                              width: 230
                          });
                      }
                  }
              },
              marker: {
                  lineWidth: 1
              }
          }
      },

      series: [{
          name: 'Outside',
          pointInterval: 600 * 1000, // ten minutes
          pointStart: timeInMillis,
          lineWidth: 4,
          marker: {
              radius: 4
          },
					color: "#f45b5b"
      },{
          name: 'Inside',
          pointInterval: 600 * 1000, // ten minutes
          pointStart: timeInMillis,
          lineWidth: 4,
          marker: {
              radius: 4
          },
					color: "#8085e9"
      },{
          name: 'CPU',
          pointInterval: 600 * 1000, // ten minutes
          pointStart: timeInMillis,
          lineWidth: 4,
          marker: {
              radius: 4
          },
					color: "#8d4654"
      }]
  });

	// Pressure graph
	$('#pressure').highcharts({
	chart: {
		type: 'line',
				zoomType: 'x'
		},
			title: {
					text: 'Weekly pressure measurements'
			},

			subtitle: {
					text: 'Atmospheric pressure is calculated using the barometer on RPi SenseHat.'
			},

			xAxis: {
				type: 'datetime',
					tickInterval: 24 * 3600 * 1000, // one day
					tickWidth: 0,
					gridLineWidth: 1,
					labels: {
							align: 'left',
							x: 3,
							y: -3
					},
					dateTimeLabelFormats: {
						day: '%A'
				}
			},

			yAxis: [{ // left y axis
					title: {
							text: 'Atmospheric pressure (hPa)'
					},
					labels: {
							align: 'left',
							x: 3,
							y: 16,
							format: '{value:.,0f}'
					},
					showFirstLabel: false
			}, { // right y axis
					linkedTo: 0,
					gridLineWidth: 0,
					opposite: true,
					title: {
							text: 'Atmospheric pressure (hPa)'
					},
					labels: {
							align: 'right',
							x: -3,
							y: 16,
							format: '{value:.,0f}'
					},
					showFirstLabel: false
			}],

			tooltip: {
					shared: true,
					crosshairs: true
			},

			plotOptions: {
					series: {
							cursor: 'pointer',
							point: {
									events: {
											click: function (e) {
													hs.htmlExpand(null, {
															pageOrigin: {
																	x: e.pageX || e.clientX,
																	y: e.pageY || e.clientY
															},
															headingText: this.series.name,
															maincontentText: Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':<br/> ' +
																	this.y + ' hPa',
															width: 230
													});
											}
									}
							},
							marker: {
									lineWidth: 1
							}
					}
			},

			series: [{
					name: 'RPi SenseHat Barometer',
					pointInterval: 600 * 1000, // ten minutes
					pointStart: timeInMillis,
					lineWidth: 4,
					marker: {
							radius: 4
					},
					color: "#DF5353"
			}]
	});

	// Humidity graph
	$('#humidity').highcharts({
	chart: {
		type: 'line',
				zoomType: 'x'
		},
			title: {
					text: 'Weekly humidity measurements'
			},

			subtitle: {
					text: 'Relative humidity is calculated using the humidity sensor on RPi SenseHat.'
			},

			xAxis: {
				type: 'datetime',
					tickInterval: 24 * 3600 * 1000, // one day
					tickWidth: 0,
					gridLineWidth: 1,
					labels: {
							align: 'left',
							x: 3,
							y: -3
					},
					dateTimeLabelFormats: {
						day: '%A'
				}
			},

			yAxis: [{ // left y axis
					title: {
							text: 'Relative humidity (% rH)'
					},
					labels: {
							align: 'left',
							x: 3,
							y: 16,
							format: '{value:.,0f}'
					},
					showFirstLabel: false
			}, { // right y axis
					linkedTo: 0,
					gridLineWidth: 0,
					opposite: true,
					title: {
							text: 'Relative humidity (% rH)'
					},
					labels: {
							align: 'right',
							x: -3,
							y: 16,
							format: '{value:.,0f}'
					},
					showFirstLabel: false
			}],

			tooltip: {
					shared: true,
					crosshairs: true
			},

			plotOptions: {
					series: {
							cursor: 'pointer',
							point: {
									events: {
											click: function (e) {
													hs.htmlExpand(null, {
															pageOrigin: {
																	x: e.pageX || e.clientX,
																	y: e.pageY || e.clientY
															},
															headingText: this.series.name,
															maincontentText: Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':<br/> ' +
																	this.y + ' % rH',
															width: 230
													});
											}
									}
							},
							marker: {
									lineWidth: 1
							}
					}
			},

			series: [{
					name: 'RPi SenseHat humidity sensor',
					pointInterval: 600 * 1000, // ten minutes
					pointStart: timeInMillis,
					lineWidth: 4,
					marker: {
							radius: 4
					},
					color: "#7798BF"
			}]
	});

	// Events graph
	$('#events').highcharts({
	    chart: {
	        type: 'scatter',
	        zoomType: 'xy'
	    },
	    title: {
	        text: 'Daily event triggers'
	    },
	    subtitle: {
	        text: 'Any irregular occuring events is displayed here.'
	    },
			yAxis: {
				title: {
					enabled: false
				},
				labels: {
					enabled: false
				}
			},
	    xAxis: {
	        type: 'datetime',
	        tickWidth: 0,
	        gridLineWidth: 1,
	        labels: {
	            align: 'left',
	            x: 3,
	            y: -3
	        },
	        dateTimeLabelFormats: {
	          	day: '%A'
	        }
	    },
	    tooltip: {
	        formatter: function() {
	            return  '<b>' + this.series.name +'</b><br/>' +
	                Highcharts.dateFormat('%A, %b %e - %H:%M:%S, %Y', new Date(this.x));
	        }
	    },
	    plotOptions: {
	        scatter: {
	            marker: {
	                radius: 5,
	                states: {
	                    hover: {
	                        enabled: true,
	                        lineColor: 'rgb(100,100,100)'
	                    }
	                }
	            },
	            states: {
	                hover: {
	                    marker: {
	                        enabled: false
	                    }
	                }
	            }
	        }
	    },
	    series: [{
	        name: 'PIR motion event',
	        color: 'rgba(127, 175, 27, .5)'
	    }, {
	        name: 'Ultrasonic rain event',
	        color: 'rgba(22, 147, 165, .5)'
	    }, {
	        name: 'Shutter open event',
	        color: 'rgba(202, 32, 132, .5)'
	    }, {
	        name: 'Shutter close event',
	        color: 'rgba(111, 0, 65, .5)'
	    }]
	});

  var tChart = $('#temperature').highcharts();
	var pChart = $('#pressure').highcharts();
	var hChart = $('#humidity').highcharts();
	var eChart = $('#events').highcharts();

	tChart.showLoading('Loading data from server.');
	pChart.showLoading('Loading data from server..');
	hChart.showLoading('Loading data from server...');
	eChart.showLoading('Loading data from server.');

	var ref = new Firebase("https://resplendent-torch-8387.firebaseio.com/sensors");
	ref.on("value", function(snapshot) {
		var obj = snapshot.val();
		console.log(snapshot.val());
		//var obj = jQuery.parseJSON(data);
		//console.log(obj);

		/*
		 * Clear previous data from charts
		 */
		tChart.series[0].setData([]);
		tChart.series[1].setData([]);
		tChart.series[2].setData([]);
		pChart.series[0].setData([]);
		hChart.series[0].setData([]);
		eChart.series[0].setData([]);
		eChart.series[1].setData([]);
		eChart.series[2].setData([]);


		var dict = {}, arr = [];
		obj.temperature.outside.forEach(function(t) {
			t.datetime = Math.round(new Date(t.datetime).getTime()/600000)*600;
		  if (!dict[t.datetime]) dict[t.datetime]=t;
		});
		for(var datetime in dict) {
		  arr.push(dict[datetime]);
		}
		obj.temperature.outside=arr.slice(0);
		dict = {};
		arr.length = 0;
		obj.temperature.inside.forEach(function(t) {
			t.datetime = Math.round(new Date(t.datetime).getTime()/600000)*600;
			if (!dict[t.datetime]) dict[t.datetime]=t;
		});
		for(var datetime in dict) {
			arr.push(dict[datetime]);
		}
		obj.temperature.inside=arr.slice(0);;
		dict = {};
		arr.length = 0;
		obj.temperature.cpu.forEach(function(t) {
			t.datetime = Math.round(new Date(t.datetime).getTime()/600000)*600;
			if (!dict[t.datetime]) dict[t.datetime]=t;
		});
		for(var datetime in dict) {
			arr.push(dict[datetime]);
		}
		obj.temperature.cpu=arr.slice(0);
		dict = {};
		arr.length = 0;
		obj.pressure.forEach(function(t) {
			t.datetime = Math.round(new Date(t.datetime).getTime()/600000)*600;
			if (!dict[t.datetime]) dict[t.datetime]=t;
		});
		for(var datetime in dict) {
			arr.push(dict[datetime]);
		}
		obj.pressure=arr.slice(0);
		dict = {};
		arr.length = 0;
		obj.humidity.forEach(function(t) {
			t.datetime = Math.round(new Date(t.datetime).getTime()/600000)*600;
			if (!dict[t.datetime]) dict[t.datetime]=t;
		});
		for(var datetime in dict) {
			arr.push(dict[datetime]);
		}
		obj.humidity=arr.slice(0);
		dict = {};
		arr.length = 0;
		var timeInSeconds = Math.round(timeInMillis / 1000.0);

		var i = 0, j = 0, k = 0, l = 0, m = 0;
		for(var n = 0; n <= 7*24*6; ++n) {
			var nSeconds = timeInSeconds + n*600;

			// Temperature graph
			if(i < obj.temperature.outside.length && obj.temperature.outside[i].datetime == nSeconds) {
				if(isNaN(obj.temperature.outside[i].value)) {
					tChart.series[0].addPoint(null, false, false);
				}else {
					tChart.series[0].addPoint(obj.temperature.outside[i].value / 10.0, false, false);
				}
				i++;
			}else {
				tChart.series[0].addPoint(null, false, false);
			}

			if(j < obj.temperature.inside.length && obj.temperature.inside[j].datetime == nSeconds) {
				if(isNaN(obj.temperature.inside[j].value)) {
					tChart.series[1].addPoint(null, false, false);
				}else {
					tChart.series[1].addPoint(obj.temperature.inside[j].value / 10.0, false, false);
				}
				j++;
			}else {
				tChart.series[1].addPoint(null, false, false);
			}

			if(k < obj.temperature.cpu.length && obj.temperature.cpu[k].datetime == nSeconds) {
				if(isNaN(obj.temperature.cpu[k].value)) {
					tChart.series[2].addPoint(null, false, false);
				}else {
					tChart.series[2].addPoint(obj.temperature.cpu[k].value / 10.0, false, false);
				}
				k++;
			}else {
				tChart.series[2].addPoint(null, false, false);
			}

			// Pressure graph
			if(l < obj.pressure.length && obj.pressure[l].datetime == nSeconds) {
				if(isNaN(obj.pressure[l].value)) {
					pChart.series[0].addPoint(null, false, false);
				}else {
					pChart.series[0].addPoint(obj.pressure[l].value / 10.0, false, false);
				}
				l++;
			}else {
				pChart.series[0].addPoint(null, false, false);
			}

			// Humidity graph
			if(m < obj.humidity.length && obj.humidity[m].datetime == nSeconds) {
				if(isNaN(obj.humidity[m].value)) {
					hChart.series[0].addPoint(null, false, false);
				}else {
					hChart.series[0].addPoint(obj.humidity[m].value / 10.0, false, false);
				}
				m++;
			}else {
				hChart.series[0].addPoint(null, false, false);
			}
		}

		tChart.hideLoading();
		tChart.redraw();
		pChart.hideLoading();
		pChart.redraw();
		hChart.hideLoading();
		hChart.redraw();

		// Events graph
		var shutter_open = [], shutter_close = [], rain = [], pir = [];
		if(!!obj.events.shutter) {
			dict = {};
			obj.events.shutter.forEach(function(t) {
				t.datetime = new Date(t.datetime).getTime();
				if (!dict[t.datetime]) dict[t.datetime] = t;
			});
			for(var datetime in dict) {
				if(dict[datetime].event.trim() == "open") {
					shutter_open.push([parseInt(dict[datetime].datetime), 3]);
				}else if(dict[datetime].event.trim() == "close") {
					shutter_close.push([parseInt(dict[datetime].datetime), 3]);
				}
			}
		}
		if(!!obj.events.rain) {
			dict = {};
			obj.events.rain.forEach(function(t) {
				t = new Date(t).getTime();
				if (!dict[t]) dict[t] = [parseInt(t), 2];
			});
			for(var datetime in dict) {
				rain.push(dict[datetime]);
			}
		}
		if(!!obj.events.pir) {
			dict = {};
			obj.events.pir.forEach(function(t) {
				t = new Date(t).getTime();
				if (!dict[t]) dict[t] = [parseInt(t), 1];
			});
			for(var datetime in dict) {
				pir.push(dict[datetime]);
			}
		}

		eChart.series[0].update({name:"PIR motion event ( " + pir.length + " )"}, false);
		eChart.series[1].update({name:"Ultrasonic rain event (" + rain.length + " )"}, false);
		eChart.series[2].update({name:"Shutter open event ( " + shutter_open.length + " )"}, false);
		eChart.series[3].update({name:"Shutter close event ( " + shutter_close.length + " )"}, false);

		if(shutter_open.length > 0) eChart.series[2].setData(shutter_open);
		if(shutter_close.length > 0) eChart.series[3].setData(shutter_close);
		if(rain.length > 0) eChart.series[1].setData(rain);
		if(pir.length > 0) eChart.series[0].setData(pir);
		eChart.hideLoading();
		eChart.redraw();
	});
});
