
'use strict';

$(function() {
    
    // Update the Traffic cell
    $.getJSON('/api/stats/traffic', function( data ) { 
        //console.log( ' -> ' + data['traffic'] ) 
        $('#stats_traffic').html( data['traffic'] );
    });

    // Update the Users cell
    $.getJSON('/api/stats/users', function( data ) { 
        //console.log( ' -> ' + data['traffic'] ) 
        $('#stats_users').html( data['users'] );
    });

    // Update the Sales cell
    $.getJSON('/api/stats/sales', function( data ) { 
        //console.log( ' -> ' + data['traffic'] ) 
        $('#stats_sales').html( data['sales'] );
    });

    // Update the Perf cell
    $.getJSON('/api/stats/perf', function( data ) { 
        //console.log( ' -> ' + data['traffic'] ) 
        $('#stats_perf').html( data['perf'] );
    });

});
