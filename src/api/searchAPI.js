/**
 * Created by athajudeen on 09/11/2015.
 */

import endpointConstants from '../constants/endpointConstants';
import $ from 'jquery';
var Promise = require('es6-promise').Promise;

var searchAPI = {
  getBundle: function(searchTerm){
  var query = buildQuery(searchTerm);
    console.log(query);
    return Promise.resolve(
      executeQuery(query).then(
        function (data) {
          var info = {total: data.Results.hits.total};
          return {data: data.Results.hits.hits, info: info};
        },
        handleError
      )
    );
  }
};

function buildQuery(searchTerm){
  console.log(searchTerm);
/*
  var query_1 = {"application":"expert agent","campaignID":"3fbfadbf-783c-44db-86dd-eb492100af59","context":{"index":"dev","type":"bundle-detail","showUnavailable":false},"request":{"size":18,"_source":{"include":["globalID","id","name","contractLength","hasContract","provider","cost","isExpired","ofComMarkets","services.Broadband.globalID","services.Broadband.technology","services.Broadband.downloadAllowance","services.Broadband.maximumDownloadSpeed","services.Phone.globalID","services.Phone.freeCallsSummary","services.TV.globalID","services.TV.channelsAggregations.numOfChannels","services.TV.channelsAggregations.numOfHDChannels"],"exclude":[]},"sort":{"cost.totalFirstPeriodAmount":{"order":"asc"}},"query":{"bool":{"should":[]}},"filter":{"bool":{"must":[{"term":{"services.TV.channels.name.na":"BBC 2"}}],"must_not":[{"missing":{"field":"services.TV"}},{"missing":{"field":"services.Phone"}},{"missing":{"field":"services.Broadband"}}]}}}};
*/
  var query = {
                  "application":"expert agent",
                  "campaignID":"3fbfadbf-783c-44db-86dd-eb492100af59",
                  "context":{"index":"dev","type":"bundle-detail","showUnavailable":false},
                  "request":{
                    "size":18,
                    "_source":{
                      "include":
                        ["globalID","id","name","contractLength","hasContract","provider","cost","isExpired",
                          "ofComMarkets","services.Broadband.globalID","services.Broadband.technology",
                          "services.Broadband.downloadAllowance","services.Broadband.maximumDownloadSpeed",
                          "services.Phone.globalID","services.Phone.freeCallsSummary","services.TV.globalID",
                          "services.TV.channelsAggregations.numOfChannels","services.TV.channelsAggregations.numOfHDChannels"],
                      "exclude":[]},
                    "sort":{
                      "cost.totalFirstPeriodAmount":{"order":"asc"}},
                    "query":{
                      "bool":{"should":[]}},
                    "filter":{
                      "bool":{
                        "must":
                          [],
                        "must_not":
                          [{"missing":{"field":"services.TV"}},
                           {"missing":{"field":"services.Phone"}},
                           {"missing":{"field":"services.Broadband"}}
                          ]
                      }
                    }
                  }
  };

  query.request.filter.bool.must.push({"term":{"services.TV.channels.name.na": searchTerm }});
  return query;
}

function executeQuery(request) {
  console.log(endpointConstants.SEARCH_API_URL);
  return $.ajax({
    url: endpointConstants.SEARCH_API_URL,
    type: 'POST',
    crossDomain: true,
    contentType: 'application/json',
    data: JSON.stringify(request)
  });
}

function handleError(jqXHR, textStatus) {
  console.log('Request Failed: ' + textStatus + ' - ' + jqXHR.responseText);
  return jqXHR.responseText;
}

export default searchAPI;
