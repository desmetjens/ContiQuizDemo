$(function () {
    var viewModel = new AppViewModel(Quiz);
    ko.applyBindings(viewModel);
});

function AppViewModel(data) {
    var self = this;

    self.Quiz = ko.observable(data);
    self.CurrentQuestion = ko.observable();

    self.StartQuiz = function () {
        self.CurrentQuestion(self.Quiz().Questions[0]);
    };

}

