// @flow
import { Subject } from 'rxjs/Subject'
import type { Observable } from 'rxjs/Observable'

class Formx {
    formValue: Object
    __stream$: Observable
    __dispose: Function

    constructor(initValue: Object = {}) {
        this.formValue = initValue
        this.__stream$ = new Subject()

        let handler = (current, data) => {
            let field = {}
            field[data.field] = data.value
            return {...current, ...field}
        }
        
        this.__form$ = this.__stream$.startWith(initValue).scan(handler)
        this.dispose = this.__form$.subscribe(value => this.formValue = value)
    }

    reset() {
        Object.keys(this.formValue).forEach(key => this.__stream$.next({ field: key, value: '' }))
    }

    value() {
        return Object.assign({}, this.formValue)
    }

    field(name: string) {
        return this.formValue[name]
    }

    update(field: string) {
        return (input: any) => {
            if (input != undefined) {
                this.__stream$.next({ field, value: input.target.value })
            }
        }
    }

    dispose() {
        this.dispose()
    }
}

export default Formx