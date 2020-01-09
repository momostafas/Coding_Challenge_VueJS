import { Model } from '@vuex-orm/core'

export default class task extends Model {

    static entity = 'task'

    static fields() {

        return {
            id: this.uid(),
            title: this.attr(''),
            done: this.attr(false)
        }
        
    }

}