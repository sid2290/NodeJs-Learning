// Function constructor
function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function(EventsObjectProperty, listener) {
    this.events[EventsObjectProperty] = this.events[EventsObjectProperty] || [];
    this.events[EventsObjectProperty].push(listener);
}

Emitter.prototype.emit = function(EventObjectProperty) {
    if(this.events[EventObjectProperty]) {
        this.events[EventObjectProperty].forEach(function(listener) {
            listener();
        });
    }
}

module.exports = Emitter;