let app = angular.module("Myapp", []);
app.service("convert", function() {
    this.convertNow = function(x) {
        return x.toString(16);
    }
});