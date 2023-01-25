// ViewModel KnockOut
var vm = function () {
    console.log('ViewModel initiated...');
    //---Variáveis locais
    var self = this;
    self.baseUri = ko.observable('http://192.168.160.58/Formula1/api/Statistics/Season?year=');
    self.displayName = 'Season Details';
    self.error = ko.observable('');
    self.passingMessage = ko.observable('');
    //--- Data Record
    self.SeasonRef = ko.observable('');
    self.ImageUrl = ko.observable('');
    self.Year = ko.observable('');
    self.Countries = ko.observableArray('');
    self.Constructors = ko.observableArray('');
    self.Drivers = ko.observableArray('');
    self.DriverStandings = ko.observableArray([]);
    self.ConstructorStandings = ko.observableArray('');
    self.Races = ko.observableArray('');
    self.Url = ko.observable('');

    //--- Page Events
    self.activate = function (id) {
        console.log('CALL: getDriver...');
        var composedUri = self.baseUri() + id;
        ajaxHelper(composedUri, 'GET').done(function (data) {
            console.log(data);
            self.SeasonRef(data.SeasonRef);
            self.ImageUrl(data.ImageUrl);
            self.Year(data.Year);
            self.Countries(data.Countries);
            self.Constructors(data.Constructors);
            self.ConstructorStandings(data.ConstructorStandings);
            self.Drivers(data.Drivers);
            self.DriverStandings(data.DriverStandings);
            console.log(self.DriverStandings());
            self.ConstructorStandings(data.ConstructorStandings);
            self.Url(data.Url);
            hideLoading();
        });
    };
    //--- Internal functions
    function ajaxHelper(uri, method, data) {
        self.error(''); // Clear error message
        return $.ajax({
            type: method,
            url: uri,
            dataType: 'json',
            contentType: 'application/json',
            data: data ? JSON.stringify(data) : null,
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("AJAX Call[" + uri + "] Fail...");
                hideLoading();
                self.error(errorThrown);
            }
        });

    }
    function showLoading() {
        $('#myModal').modal('show', {
            backdrop: 'static',
            keyboard: false
        });
    }
    function hideLoading() {
        $('#myModal').on('shown.bs.modal', function (e) {
            $("#myModal").modal('hide');
        })
    }

    function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
    };
    //--- start ....
    showLoading();
    var pg = getUrlParameter('id');
    console.log(pg);
    if (pg == undefined)
        self.activate(1);
    else {
        self.activate(pg);
    }
};

$(document).ready(function () {
    console.log("ready!");
    ko.applyBindings(new vm());
});
