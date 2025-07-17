class EventEmitter {
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    
    constructor(){
        this.event = new Map();
    }
    subscribe(eventName, callback) {
        if(!this.event.has(eventName)){
            this.event.set(eventName, [])
        }

        let listeners = this.event.get(eventName);
        listeners.push(callback);
        
        return {
            unsubscribe: () => {
                let index = listeners.indexOf(callback);
                if(index !== -1){
                    listeners.splice(index, 1)
                }
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if(!this.event.has(eventName)){
            return [];
        }

        let listener = this.event.get(eventName);
        return listener.map(callback => callback(...args))
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */