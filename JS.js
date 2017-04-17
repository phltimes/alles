$(document).ready(function () {
    var canvas = document.getElementByID('playeronline_chart');
    var data = {
        labels: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
        datasets: [
            {
                label: "Spieler online",
                backgroundColor: "rgba(33,150,243,0.5)",
                borderColor: "rgba(33,150,243,1)",
                borderWidth: 2,
                hoverBackgroundColor: "rgba(33,150,243,1)",
				hoverBorderColor: "rgba(33,150,243,0.5)"
                data: [65, 59, 20, 81, 56, 55, 48]
            }
        ]
    };
    var option = {
        animation: {
			duration: 1000  
        }
    };
    Chart.defaults.global.defaultFrontColor = '#fff';
    Chart.defaults.global.legend.display = false;
	
    var myBarChart = Chart.Bar(canvas, {
        data: data,
        options: option
    });
});
