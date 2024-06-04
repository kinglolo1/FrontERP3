export class TextDirectionController {

    public textDirection!: string;

    constructor() {
        this.CheckDiriction();
    }

    public CheckDiriction(): void {
        const lang = localStorage.getItem('lang');
        if (lang === 'he') { // he - hebrew language
            this.textDirection = 'rtl';
        } else {
            this.textDirection = 'ltr';
        }
    }
}
