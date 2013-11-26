$(function () {
    var viewModel = new AppViewModel(Quiz);
    ko.applyBindings(viewModel);
	document.addEventListener("deviceready", onDeviceReady, false);
});

function AppViewModel(data) {
    var self = this;

    self.Quiz = ko.observable(data);
    self.CurrentQuestion = ko.observable();

    self.StartQuiz = function () {
        self.CurrentQuestion(self.Quiz().Questions[0]);
    };

}

function onDeviceReady(){
	$("btnExit").click(function(){
		if(navigator)
			navigator.app.exitApp();
	});
}