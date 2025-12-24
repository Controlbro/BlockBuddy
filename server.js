const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
function loadSettings() {
    try {
        const settingsPath = path.join(__dirname, 'settings.json');
        const settingsData = fs.readFileSync(settingsPath, 'utf8');
        return JSON.parse(settingsData);
    } catch (error) {
        console.error('Error loading settings:', error);
        return {
            site: {
                name: 'CraftHost',
                description: 'Minecraft Server Hosting',
                tagline: 'Start Your Server Today'
            },
            server: {
                port: 3000,
                demo_server: {
                    uptime: '99.9%',
                    online: 0,
                    version: '1.20.1',
                    max_players: 100
                }
            }
        };
    }
}
const settings = loadSettings();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    try {
        res.render('index', {
            site: settings.site,
            server: settings.server,
            locations: settings.locations,
            features: settings.features,
            plans: settings.plans,
            statistics: settings.statistics,
            social: settings.social,
            animations: settings.animations,
            testimonials: settings.site.testimonials,
            year: new Date().getFullYear()
        });
    } catch (error) {
        console.error('Error rendering page:', error);
        res.status(500).send('Error loading page');
    }
});
app.use((req, res) => {
    res.status(404).render('404', {
        site: settings.site,
        server: settings.server,
        year: new Date().getFullYear(),
        error: 'Page not found'
    });
});
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).render('index', {
        site: settings.site,
        server: settings.server,
        year: new Date().getFullYear(),
        error: 'Something went wrong!'
    });
});

// Start server
const PORT = process.env.PORT || settings.server.port || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log('Site Name:', settings.site.name);
    console.log('Description:', settings.site.description);
    console.log('Settings loaded successfully');
    
});

// Handle process errors
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1);
});

process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
    process.exit(1);
});
