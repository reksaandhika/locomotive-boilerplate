/* jshint esnext: true */
let uid = 0;

/**
 * Abstract Module
 */
export default class
{
    constructor(options)
    {
        this.$el = options.$el || null;
        this.el  = options.el  || null;

        // Generate a unique module identifier
        this.uid = 'm-' + uid++;
    }

    destroy()
    {
        if (this.$el) {
            this.$el.off();
        }
    }
}
