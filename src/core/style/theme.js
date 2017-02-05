export default class Theme {
    themes = [];
    constructor() {
        this.setThemes()
        this.initTheme();
    }

    getTheme() {
        let filteredThemes = this.themes.filter((theme) => { return theme.name === localStorage.theme; });
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
        // TODO: Remove ugly hack for hiding root. This is used as page flashes some unformed content.
        document.getElementById('root').style.display = 'none';        
        var theme = this.getTheme();
        if (localStorage.theme !== theme.name) {
            var randomThemeIndex = Math.floor(Math.random() * (this.themes.length - 1 + 1));
            theme = this.themes[randomThemeIndex];
            localStorage.theme = theme.name;
        }
        require(`${'./core.scss'}`);
        require(`${theme.path}`);
        setTimeout(function() {
           document.getElementById('root').style.display = 'block';
        }, 250);
    }

    setTheme(theme) {
        localStorage.theme = theme.name;
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