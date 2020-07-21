$(document).ready(function () {
    $("#btnGenerate").click(function () {
        alert("ok");
    });
});

var ReportManager = {
    GenerateReport: function () {
        var jsonParam = "";
        var serviceUrl = "../Home/GetStudentReport";
        ReportManager.GetReport(serviceUrl, jsonParam, onFailed);
        function onFailed() {
            alert(error);
        }
    },
    GetReport: function (serviceUrl, jsonParams, errorCallBack) {
        jQuery.ajax({
            url: serviceUrl,
            async: false,
            type: "POST",
            data: "{" + jsonParams + "}",
            contentType: "application/json; charset=utf-8",
            success: function () {
                window.open('../Reports/ReportsViewer.aspx', '_newtab');
            },
            error: errorCallBack
        });

    }
};
var ReportHelper = {

};
