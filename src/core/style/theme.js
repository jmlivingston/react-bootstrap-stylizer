export default class Theme {
    themes = [];
    constructor() {
        this.setThemes()
        this.initTheme();
    }

    getTheme() {
        let filteredThemes = this.themes.filter((x) => { return x.path.toString() === localStorage.theme.toString(); });
        if (filteredThemes.length > 0) {
            return filteredThemes[0];
        } else {
            return this.themes[0];
        }
    }
    
    getThemes() {
        return this.themes;
    }

    initTheme() {        
        var theme = ''
        if (localStorage.theme) {
            theme = localStorage.theme;
        } else {
            var randomThemeIndex = Math.floor(Math.random() * (this.themes.length - 1 + 1)) + 1;
            theme = this.themes[randomThemeIndex].path;
            localStorage.theme = theme;
        }
        // TODO: Figure out a better way to avoid "Critical Dependencies" error in console.
        require('./core.scss');
        require(theme);
    }

    setTheme(theme) {
        localStorage.theme = theme.path;
        location.reload();
    }

    setThemes() {
        let bootswatchNames = ['cerulean', 'cosmo', 'cyborg', 'darkly', 'flatly', 'journal', 'litera', 'lumen', 'lux', 'materia',
            'minty', 'pulse', 'sandstone', 'simplex', 'slate', 'solar', 'spacelab', 'superhero', 'united', 'yeti'];
        this.themes = [{
            name: 'Original',
            path: './themes/original/core.scss'
        }, {
            name: 'Custom - Dark',
            path: './themes/custom/dark/core.scss'
        }, {
            name: 'Custom - Material',
            path: './themes/custom/material/core.scss'
        }];
        for (var i = 0; i < bootswatchNames.length; i++) {
            let name = bootswatchNames[i];
            this.themes.push({
                name: 'Bootswatch - ' + name[0].toUpperCase() + name.slice(1),
                path: './themes/bootswatch/' + name + '/core.scss'
            })
        }
    }
}