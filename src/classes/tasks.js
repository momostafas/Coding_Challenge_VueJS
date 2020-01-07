import Model from '@vuex-orm/core'

export default class tasks extends Model {

    static entity = 'tasks'

    static fields() {

        return {
            id: this.attr(null),
            body: {
                title: this.attr(''),
                done: this.attr(false)
            }
        }
        
    }

}